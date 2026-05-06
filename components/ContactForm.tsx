'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!endpoint) {
      setStatus('error');
      setErrorMessage(
        'お問い合わせフォームの設定がまだ完了していません。お手数ですが時間をおいて再度お試しください。',
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus('error');
        setErrorMessage(
          data?.errors?.[0]?.message ??
            '送信に失敗しました。時間をおいて再度お試しください。',
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'ネットワークエラーが発生しました。時間をおいて再度お試しください。',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div
          aria-hidden
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white"
        >
          <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="font-display mt-5 text-xl font-bold text-ink-900">
          送信が完了しました
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">
          お問い合わせありがとうございます。内容を確認のうえ、編集部より折り返しご連絡いたします。
          <br />
          数日〜1週間ほどお時間をいただく場合がありますので、ご了承ください。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-ink-900">
            お名前 <span className="text-accent-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-ink-900">
            メールアドレス <span className="text-accent-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-ink-900">
            ご用件
          </label>
          <select
            id="subject"
            name="subject"
            defaultValue="記事内容について"
            className="mt-2 w-full rounded-lg border border-cream-200 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-200"
          >
            <option>記事内容について</option>
            <option>誤りの指摘</option>
            <option>取材・寄稿のご相談</option>
            <option>広告・メディアパートナーシップ</option>
            <option>その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-ink-900">
            お問い合わせ内容 <span className="text-accent-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            className="mt-2 w-full resize-y rounded-lg border border-cream-200 bg-cream-50 px-4 py-2.5 text-sm leading-relaxed text-ink-900 outline-none transition focus:border-brand-600 focus:bg-white focus:ring-2 focus:ring-brand-200"
          />
        </div>

        {/* honeypot */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <p className="text-xs leading-relaxed text-ink-500">
          送信前に
          <a href="/privacy" className="ml-0.5 font-bold text-brand-700 underline-offset-2 hover:underline">
            プライバシーポリシー
          </a>
          をご確認ください。送信ボタンを押すことで、内容に同意したものとみなします。
        </p>

        {status === 'error' && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          >
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? '送信中...' : '送信する'}
        </button>
      </div>
    </form>
  );
}

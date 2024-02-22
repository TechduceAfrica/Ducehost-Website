import Script from 'next/script';

export default function TawkToScript() {
  return (
      <>
          <Script
            strategy="lazyOnload"
            src="https://embed.tawk.to/6426e6d94247f20fefe91215/1gsrvbh9l"
          />
      </>
  );
}


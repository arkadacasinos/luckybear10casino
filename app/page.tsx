'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, CircleCheck, ExternalLink, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'

const keywords = [
  'lucky bear casino',
  'luckybear casino',
  'luckybear casino зеркало',
  'luckybear casino официальный',
  'luckybear casino официальный сайт',
  'lucky bear казино',
  'лаки бир казино',
  'лакибир казино',
  'лаки бир казино зеркало',
  'лаки бир казино онлайн',
  'лаки бир казино официальный',
  'лаки бир казино официальный сайт',
  'лакибир казино официальный сайт',
  'лаки бир казино сайт',
]

const faqs = [
  {
    question: 'Как найти официальный сайт Lucky Bear Casino?',
    answer: 'Проверяйте адрес в нескольких независимых источниках и обращайте внимание на защищённое соединение. Если основной домен временно не открывается, используйте актуальную страницу-зеркало, опубликованную в проверенном канале казино. Не вводите данные на случайных копиях с похожим названием.',
  },
  {
    question: 'Что делать, если luckybear casino зеркало не открывается?',
    answer: 'Сначала обновите страницу, отключите устаревший VPN-профиль и проверьте интернет-соединение. Затем сравните адрес с последней официальной публикацией. Зеркала могут меняться, поэтому старые ссылки не всегда остаются рабочими.',
  },
  {
    question: 'Можно ли играть в лаки бир казино онлайн с телефона?',
    answer: 'Да, современная версия сайта адаптирована для браузеров Android и iOS. Отдельное приложение не требуется: откройте сайт в мобильном браузере, войдите в аккаунт и выберите игру. Используйте только личное устройство и защищённую сеть.',
  },
  {
    question: 'Какие документы могут потребоваться для вывода?',
    answer: 'В зависимости от операции служба поддержки может попросить подтвердить личность и способ оплаты. Это стандартная процедура безопасности. Загружайте документы только через защищённый личный кабинет и не отправляйте их в публичные чаты.',
  },
]

function BearMark() {
  return (
    <span className="lb10-brand-mark" aria-hidden="true">
      <span className="lb10-ear lb10-ear-left" />
      <span className="lb10-ear lb10-ear-right" />
      <span className="lb10-face"><span className="lb10-nose" /></span>
    </span>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="lb10-shell">
      <header className="lb10-header">
        <div className="lb10-container lb10-header-inner">
          <a className="lb10-brand" href="#top" aria-label="Lucky Bear Casino — на главную">
            <BearMark />
            <span><b>LUCKY BEAR</b><small>CASINO GUIDE</small></span>
          </a>
          <button className="lb10-menu-button" type="button" aria-expanded={menuOpen} aria-controls="lb10-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Открыть меню</span>{menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="lb10-navigation" className={`lb10-nav ${menuOpen ? 'lb10-nav-open' : ''}`} aria-label="Основная навигация">
            <a href="#start" onClick={() => setMenuOpen(false)}>Быстрый старт</a>
            <a href="#mirror" onClick={() => setMenuOpen(false)}>Зеркало</a>
            <a href="#games" onClick={() => setMenuOpen(false)}>Игры</a>
            <a href="#safety" onClick={() => setMenuOpen(false)}>Безопасность</a>
            <a className="lb10-nav-cta" href="#faq" onClick={() => setMenuOpen(false)}>FAQ <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="lb10-hero">
          <div className="lb10-container lb10-hero-grid">
            <div className="lb10-hero-copy">
              <p className="lb10-eyebrow"><span className="lb10-dot" /> Навигатор игрока · 18+</p>
              <h1>Lucky Bear Casino — игра начинается с правильного адреса</h1>
              <p className="lb10-lead">Понятный гид по входу, зеркалу, играм и безопасному использованию платформы. Разбираемся без лишнего шума: как найти <strong>lucky bear casino</strong>, проверить официальный сайт и настроить комфортную игру с телефона.</p>
              <div className="lb10-actions">
                <a className="lb10-button lb10-button-gold" href="#start">Начать с основ <ArrowRight size={18} /></a>
                <a className="lb10-button lb10-button-ghost" href="#mirror">Проверить зеркало <ExternalLink size={16} /></a>
              </div>
              <div className="lb10-trust-row" aria-label="Основные принципы">
                <span><ShieldCheck size={17} /> Защищённое соединение</span>
                <span><CircleCheck size={17} /> Честная навигация</span>
              </div>
            </div>
            <div className="lb10-hero-art">
              <img src="/luckybear-hero.png" alt="Медведь Lucky Bear в ночном лесу рядом с золотым знаком казино" width="900" height="700" />
              <div className="lb10-art-note"><Sparkles size={16} /><span>Играйте осознанно<br /><b>и в рамках бюджета</b></span></div>
            </div>
          </div>
        </section>

        <div className="lb10-container lb10-section-label"><span>01</span><p>Навигация без догадок</p><i /></div>

        <section id="start" className="lb10-container lb10-content-section">
          <div className="lb10-section-intro"><p className="lb10-kicker">С чего начать</p><h2>Лаки бир казино: короткий путь от поиска до игры</h2></div>
          <div className="lb10-prose-grid">
            <article>
              <p>Поисковый запрос <strong>лаки бир казино</strong> часто появляется в момент, когда игрок хочет быстро вернуться на знакомую платформу. Одновременно в выдаче могут встречаться разные варианты написания: <strong>luckybear casino</strong>, «лакибир казино» или <strong>lucky bear казино</strong>. Важно понимать: красивый баннер и знакомое имя ещё не подтверждают, что перед вами нужный ресурс.</p>
              <p>Начните с адреса. У официальной страницы должна быть понятная доменная зона, защищённое соединение и логичная структура кабинета. Не переходите по ссылкам из случайных комментариев, не устанавливайте неизвестные файлы и не передавайте пароль сотруднику поддержки. Если сайт просит срочно «разблокировать выигрыш» переводом на личную карту, остановитесь и перепроверьте информацию.</p>
              <p>Этот материал — не обещание дохода и не рекомендация рисковать. Lucky Bear — развлекательная платформа для совершеннолетних, а результат любой игры зависит от случайности. Определите лимит заранее, не используйте деньги на обязательные расходы и делайте паузы.</p>
            </article>
            <aside className="lb10-checklist">
              <p className="lb10-kicker">Перед первым входом</p>
              <ul>
                <li><CircleCheck size={18} /><span>Сверьте домен и HTTPS в адресной строке.</span></li>
                <li><CircleCheck size={18} /><span>Создайте отдельный сложный пароль.</span></li>
                <li><CircleCheck size={18} /><span>Установите личный лимит пополнений.</span></li>
                <li><CircleCheck size={18} /><span>Сохраните контакты официальной поддержки.</span></li>
              </ul>
              <div className="lb10-mini-stat"><b>18+</b><span>Только для совершеннолетних пользователей</span></div>
            </aside>
          </div>
        </section>

        <section id="mirror" className="lb10-dark-section">
          <div className="lb10-container">
            <div className="lb10-section-label lb10-section-label-light"><span>02</span><p>Доступ и адрес</p><i /></div>
            <div className="lb10-two-col">
              <div><p className="lb10-kicker">Официальный маршрут</p><h2>Luckybear casino зеркало и официальный сайт: в чём разница?</h2></div>
              <div className="lb10-prose-light">
                <p>Когда основной адрес временно недоступен из-за технических работ или особенностей сети, пользователи ищут <strong>luckybear casino зеркало</strong>. Зеркало — это альтернативный вход в ту же экосистему, а не отдельный клуб с другими правилами. Поэтому ключевой критерий — не слово «зеркало» в названии, а источник, который сообщил актуальный адрес.</p>
                <p>Запрос <strong>luckybear casino официальный</strong> помогает найти подтверждённую информацию, но поисковая выдача не заменяет проверку. Уточните адрес в самом личном кабинете, в официальном канале проекта или через службу поддержки. Только после этого используйте <strong>luckybear casino официальный сайт</strong> для регистрации, пополнения и вывода.</p>
                <div className="lb10-tip"><b>Полезная привычка</b><span>Добавьте подтверждённый адрес в закладки и не храните его в открытых сообщениях. Так вы снизите риск перейти на поддельную копию.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="lb10-container lb10-content-section">
          <div className="lb10-section-intro"><p className="lb10-kicker">Регистрация и вход</p><h2>Как выглядит спокойный старт в Lucky Bear Casino</h2></div>
          <div className="lb10-steps">
            <article><span>01</span><h3>Откройте адрес</h3><p>Переходите только на <strong>luckybear casino официальный сайт</strong> или актуальное зеркало. Проверьте строку браузера до ввода данных.</p></article>
            <article><span>02</span><h3>Создайте профиль</h3><p>Укажите актуальную почту, придумайте отдельный пароль и внимательно прочитайте правила бонуса, лимиты и условия вывода.</p></article>
            <article><span>03</span><h3>Настройте лимиты</h3><p>Выберите сумму, которую готовы потратить на развлечения. Не увеличивайте ставку, чтобы отыграться, и не занимайте деньги для игры.</p></article>
          </div>
          <p className="lb10-wide-copy">Иногда пользователи специально вводят в поиске «<strong>лаки бир казино официальный</strong>» или «<strong>лакибир казино официальный сайт</strong>», потому что хотят отсеять неофициальные страницы. Это разумный подход, если он сопровождается проверкой адреса и условий. Перед регистрацией посмотрите, доступны ли правила на русском языке, указаны ли контакты поддержки и понятно ли, как работает верификация. Прозрачность интерфейса важнее ярких обещаний.</p>
        </section>

        <div className="lb10-container lb10-section-label"><span>03</span><p>Внутри платформы</p><i /></div>
        <section id="games" className="lb10-container lb10-content-section lb10-games-section">
          <div className="lb10-section-intro"><p className="lb10-kicker">Выбор без перегруза</p><h2>Лаки бир казино онлайн: игры, бонусы и разумная стратегия</h2><p>В каталоге могут быть слоты, настольные форматы и live-игры. Выбирайте не по размеру обещанного приза, а по знакомым правилам и комфортному темпу.</p></div>
          <div className="lb10-game-cards">
            <article className="lb10-game-card"><div className="lb10-card-icon">♠</div><h3>Слоты</h3><p>Простая механика и быстрые раунды. Проверьте таблицу выплат, волатильность и минимальную ставку.</p><a href="#safety">О правилах <ArrowRight size={15} /></a></article>
            <article className="lb10-game-card lb10-game-card-featured"><div className="lb10-card-icon">◈</div><h3>Настольные игры</h3><p>Подходят тем, кто хочет видеть логику раунда. Сначала разберитесь в правилах на демо или в справке.</p><a href="#faq">Частые вопросы <ArrowRight size={15} /></a></article>
            <article className="lb10-game-card"><div className="lb10-card-icon">✦</div><h3>Live-форматы</h3><p>Живой интерфейс требует внимания и стабильного соединения. Заранее определите время сессии.</p><a href="#start">Начать осознанно <ArrowRight size={15} /></a></article>
          </div>
          <p className="lb10-wide-copy">Если вы ищете «<strong>лаки бир казино онлайн</strong>», не путайте доступность сайта с гарантией результата. Бонус — это не бесплатные деньги без условий: у него могут быть требования по отыгрышу, срок действия, ограничения на вывод и список подходящих игр. Прочитайте правила до активации. При непонятной формулировке задайте вопрос поддержке и сохраните ответ.</p>
        </section>

        <section id="safety" className="lb10-safety-section">
          <div className="lb10-container lb10-safety-grid">
            <div><p className="lb10-kicker">Защита аккаунта</p><h2>Безопасность, платежи и мобильный доступ</h2><p>Хорошая платформа не заставляет выбирать между скоростью и осторожностью. Внимательно проверяйте реквизиты перед подтверждением операции, не используйте публичный Wi‑Fi для финансовых действий и включайте доступные дополнительные меры защиты.</p></div>
            <div className="lb10-safety-list">
              <div><ShieldCheck size={22} /><span><b>Платежи</b><small>Проверяйте валюту, комиссию и минимальную сумму до подтверждения.</small></span></div>
              <div><ShieldCheck size={22} /><span><b>Верификация</b><small>Передавайте документы только через защищённую форму в аккаунте.</small></span></div>
              <div><ShieldCheck size={22} /><span><b>Телефон</b><small>Адаптивная мобильная версия работает в браузере без лишних загрузок.</small></span></div>
            </div>
          </div>
        </section>

        <section id="faq" className="lb10-container lb10-content-section lb10-faq-section">
          <div className="lb10-section-intro"><p className="lb10-kicker">Ответы рядом</p><h2>FAQ о Lucky Bear Casino</h2><p>Собрали вопросы, которые чаще всего возникают перед входом, регистрацией и первой игровой сессией.</p></div>
          <div className="lb10-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={20} /></summary><p>{faq.answer}</p></details>)}</div>
        </section>
      </main>

      <footer className="lb10-footer">
        <div className="lb10-container">
          <div className="lb10-footer-top"><a className="lb10-brand" href="#top"><BearMark /><span><b>LUCKY BEAR</b><small>CASINO GUIDE</small></span></a><p>Информационный гид для совершеннолетних пользователей. Играйте ответственно.</p></div>
          <div className="lb10-footer-bottom"><span>© 2026 Lucky Bear Casino Guide · 18+</span><div className="lb10-hashtags" aria-label="Поисковые фразы">{keywords.map((keyword) => <span key={keyword}>#{keyword.replaceAll(' ', '_')}</span>)}</div></div>
        </div>
      </footer>
    </div>
  )
}

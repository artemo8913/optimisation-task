function Header() {
let [e, t] = React.useState(!1),
[l, n] = React.useState(!1),
o = () => {
l || n(!0), t(!e);
};
return (
<header className="header">
<a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>

<button className="header__menu" aria-expanded={e ? "true" : "false"} onClick={o}>
<span className="header__menu-text a11y-hidden">{e ? "Закрыть меню" : "Открыть меню"}</span>
</button>

<ul className={"header__links" + (e ? " header__links_opened" : "") + (l ? " header__links-toggled" : "")}>
<li className="header__item">
<a className="header__link header__link_current" href="/" aria-current="page">
Сводка
</a>
</li>

<li className="header__item">
<a className="header__link" href="/devices">
Устройства
</a>
</li>

<li className="header__item">
<a className="header__link" href="/scripts">
Сценарии
</a>
</li>
</ul>
</header>
);
}
function Event(e) {
let t = React.useRef(),
{ onSize: l } = e;
return (
React.useEffect(() => {
let e = t.current.offsetWidth,
n = t.current.offsetHeight;
l && l({ width: e, height: n });
}),
(
<li ref={t} className={"event" + (e.slim ? " event_slim" : "")}>
<button className="event__button">
<span className={`event__icon event__icon_${e.icon}`} role="img" aria-label={e.iconLabel}></span>

<h4 className="event__title">{e.title}</h4>

{e.subtitle && <span className="event__subtitle">{e.subtitle}</span>}
</button>
</li>
)
);
}
const TABS = {
all: {
title: "Все",
items: [
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Yeelight LED Smart Bulb", subtitle: "Включено" },
{ icon: "light", iconLabel: "Освещение", title: "D-Link Omna 180 Cam", subtitle: "Включится в 17:00" },
{ icon: "temp", iconLabel: "Температура", title: "Elgato Eve Degree Connected", subtitle: "Выключено до 17:00" },
{ icon: "light", iconLabel: "Освещение", title: "LIFX Mini Day & Dusk A60 E27", subtitle: "Включится в 17:00" },
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Mi Air Purifier 2S", subtitle: "Включено" },
{ icon: "light", iconLabel: "Освещение", title: "Philips Zhirui", subtitle: "Включено" },
{ icon: "light", iconLabel: "Освещение", title: "Philips Zhirui", subtitle: "Включено" },
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Mi Air Purifier 2S", subtitle: "Включено" },
],
},
kitchen: {
title: "Кухня",
items: [
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Yeelight LED Smart Bulb", subtitle: "Включено" },
{ icon: "temp", iconLabel: "Температура", title: "Elgato Eve Degree Connected", subtitle: "Выключено до 17:00" },
],
},
hall: {
title: "Зал",
items: [
{ icon: "light", iconLabel: "Освещение", title: "Philips Zhirui", subtitle: "Выключено" },
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Mi Air Purifier 2S", subtitle: "Выключено" },
],
},
lights: {
title: "Лампочки",
items: [
{ icon: "light", iconLabel: "Освещение", title: "D-Link Omna 180 Cam", subtitle: "Включится в 17:00" },
{ icon: "light", iconLabel: "Освещение", title: "LIFX Mini Day & Dusk A60 E27", subtitle: "Включится в 17:00" },
{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Mi Air Purifier 2S", subtitle: "Включено" },
{ icon: "light", iconLabel: "Освещение", title: "Philips Zhirui", subtitle: "Включено" },
],
},
cameras: {
title: "Камеры",
items: [{ icon: "light2", iconLabel: "Освещение", title: "Xiaomi Mi Air Purifier 2S", subtitle: "Включено" }],
},
};
for (let i = 0; i < 6; ++i) TABS.all.items = [...TABS.all.items, ...TABS.all.items];
const TABS_KEYS = Object.keys(TABS);
function Main() {
let e = React.useRef(),
t = React.useRef(!1),
[l, n] = React.useState(""),
[o, r] = React.useState(!1);
React.useEffect(() => {
l || t.current || ((t.current = !0), n(new URLSearchParams(location.search).get("tab") || "all"));
});
let s = (e) => {
n(e.target.value);
},
c = [],
h = (e) => {
c = [...c, e];
};
React.useEffect(() => {
let t = c.reduce((e, t) => e + t.width, 0);
c.reduce((e, t) => e + t.height, 0);
let l = t > e.current.offsetWidth;
l !== o && r(l);
});
let d = () => {
let t = e.current.querySelector(".section__panel:not(.section__panel_hidden)");
t && t.scrollTo({ left: t.scrollLeft + 400, behavior: "smooth" });
};
return (
<main className="main">
<section className="section main__general">
<h2 className="section__title section__title-header section__main-title">Главное</h2>

<div className="hero-dashboard">
<div className="hero-dashboard__primary">
<h3 className="hero-dashboard__title">Привет, Геннадий!</h3>

<p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>

<ul className="hero-dashboard__info">
<li className="hero-dashboard__item">
<div className="hero-dashboard__item-title">Дома</div>

<div className="hero-dashboard__item-details">
+23
<span className="a11y-hidden">°</span>
</div>
</li>

<li className="hero-dashboard__item">
<div className="hero-dashboard__item-title">За окном</div>

<div className="hero-dashboard__item-details">
+19
<span className="a11y-hidden">°</span>
<div className="hero-dashboard__icon hero-dashboard__icon_rain" role="img" aria-label="Дождь"></div>
</div>
</li>
</ul>
</div>

<ul className="hero-dashboard__schedule">
<Event icon="temp" iconLabel="Температура" title="Philips Cooler" subtitle="Начнет охлаждать в 16:30" />

<Event
icon="light"
iconLabel="Освещение"
title="Xiaomi Yeelight LED Smart Bulb"
subtitle="Включится в 17:00"
/>

<Event
icon="light"
iconLabel="Освещение"
title="Xiaomi Yeelight LED Smart Bulb"
subtitle="Включится в 17:00"
/>
</ul>
</div>
</section>

<section className="section main__scripts">
<h2 className="section__title section__title-header">Избранные сценарии</h2>

<ul className="event-grid">
<Event slim={!0} icon="light2" iconLabel="Освещение" title="Выключить весь свет в доме и во дворе" />

<Event slim={!0} icon="schedule" iconLabel="Расписание" title="Я ухожу" />

<Event slim={!0} icon="light2" iconLabel="Освещение" title="Включить свет в коридоре" />

<Event
slim={!0}
icon="temp2"
iconLabel="Температура"
title="Набрать горячую ванну"
subtitle="Начнётся в 18:00"
/>

<Event slim={!0} icon="temp2" iconLabel="Температура" title="Сделать пол тёплым во всей квартире" />
</ul>
</section>

<section className="section main__devices">
<div className="section__title">
<h2 className="section__title-header">Избранные устройства</h2>

<select className="section__select" defaultValue="all" onInput={s}>
{TABS_KEYS.map((e) => (
<option key={e} value={e}>
{TABS[e].title}
</option>
))}
</select>

<ul role="tablist" className="section__tabs">
{TABS_KEYS.map((e) => (
<li
key={e}
role="tab"
aria-selected={e === l ? "true" : "false"}
tabIndex={e === l ? "0" : void 0}
className={"section__tab" + (e === l ? " section__tab_active" : "")}
id={`tab_${e}`}
aria-controls={`panel_${e}`}
onClick={() => n(e)}
>
{TABS[e].title}
</li>
))}
</ul>
</div>

<div className="section__panel-wrapper" ref={e}>
{TABS_KEYS.map((e) => (
<div
key={e}
role="tabpanel"
className={"section__panel" + (e === l ? "" : " section__panel_hidden")}
aria-hidden={e === l ? "false" : "true"}
id={`panel_${e}`}
aria-labelledby={`tab_${e}`}
>
<ul className="section__panel-list">
{TABS[e].items.map((e, t) => (
<Event key={t} {...e} onSize={h} />
))}
</ul>
</div>
))}

{o && <div className="section__arrow" onClick={d}></div>}
</div>
</section>
</main>
);
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
<>
<Header />

<Main />
</>
);

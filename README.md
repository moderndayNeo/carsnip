<img src="/src/Media/Images/shield.svg">

## Outline

A homepage reproduction of car search engine Carsnip.com. A solo project built in React.js employing the most up-to-date CSS3 features.

## Live Demo

The original site: https://www.carsnip.com

Live reproduction: https://carsnip.adamjz.vercel.app

# Mobile View

![carsnip-mobile-fullpage](https://user-images.githubusercontent.com/57966028/86012423-d8a51b00-ba15-11ea-8494-d50b35490e44.gif)

# Desktop View
![carsnip-desktop-resizing](https://user-images.githubusercontent.com/57966028/86018427-40129900-ba1d-11ea-8d03-6fe63e592b9b.gif)

# Table Of Contents

-   [Features](#features)
-   [Technologies](#technologies)
-   [The Code](#some-snippets-from-the-code)


## Features

-   Context API
-   CSS Variables, animations, and transitions
-   Responsive for all devices
-   & more

## Technologies

-   HTML5
-   CSS3
-   JavaScript
-   React.js
-   Node.js

## Some Snippets From The Code

### Employ React Context API where prop drilling exceeds five layers

```js
<CarouselContext.Provider
    value={{
        scrollerPosition,
        typedFirstPhrase,
        handleTypingFinished,
    }}
>
    <CarsnipLogo />
    <SearchWrapper />
    <CarouselWrapper />
</CarouselContext.Provider>
```

### Clean CSS

Provide each sub-component it's own CSS file. Implement CSS Variables resulting in maintainable styling

Combine media queries with CSS Variables

```css
.Highlight .Tooltip::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    --tooltip-arrow-position: translateX(-0.2rem);
    transform: var(--tooltip-arrow-position);
    margin-left: -5px;
    --tooltip-arrow-size: 8px;
    border-width: var(--tooltip-arrow-size);
    border-style: solid;
    border-color: white transparent transparent transparent;
}
```

```css
@media (min-width: 1024px) {
    .Highlight .Tooltip {
        font-size: 1.125rem;
        --tooltip-top-attribute: -7.1875rem;
        padding: 1.8125rem 2.375rem;
    }
    .Highlight .Tooltip::after {
        --tooltip-arrow-size: 18px;
        --tooltip-arrow-position: translateX(-0.8rem);
    }
}
```

Employ transitions and animations to create a UI true to the original

```css
.Highlight.highlighted .Tooltip {
    animation: 2s ease-out 0s 1 normal none running revealTooltip;
}

@keyframes revealTooltip {
    from {
        opacity: 0;
        top: -3.5rem;
    }
    to {
        opacity: 1;
        top: var(--tooltip-top-attribute);
    }
}
```

### Separation of concerns

Each function serves a single purpose

```js
import {
    landRoverDiscoveryImg,
    fordFiestaImg,
    jaguarXkConvertibleImg,
    renaultClioImg,
    vwGolfImg,
    bmwX4Img,
} from '../../../../../Media/Images/scroller-car-images'

export const carList = [
    { alt: 'Land Rover Discovery', src: landRoverDiscoveryImg },
    { alt: 'Jaguar XK Convertible', src: jaguarXkConvertibleImg },
    { alt: 'BMW X4', src: bmwX4Img },
    { alt: 'Renault Clio', src: renaultClioImg },
    { alt: 'Ford Fiesta', src: fordFiestaImg },
    { alt: 'Volkswagen Golf', src: vwGolfImg },
]
```

### Componentization

Use componentization and React Hooks, resulting in a modular codebase

```js
export default function MainPage({ onClick, popupMenuVisible }) {
    return (
        <div className={`MainPage ${popupMenuVisible && 'faded'}`}>
            {popupMenuVisible && <Overlay onClick={onClick} />}
            <section className="top">
                <Header onClick={onClick} popupMenuVisible={popupMenuVisible} />
                <CarSearch />
            </section>
            <ManufacturerCardsWrapper />
            <ManufacturerListWrapper />
            <Main />
            <Copyright />
        </div>
    )
}
```

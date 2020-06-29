<img src="/src/Media/Images/shield.svg">

## Outline

A homepage clone of car search engine Carsnip.com. A solo project built in ReactJS.

## Live Demo

The original site: https://www.carsnip.com

Live clone: https://carsnip.adamjz.vercel.app

# Mobile View

![carsnip-mobile-fullpage](https://user-images.githubusercontent.com/57966028/86012423-d8a51b00-ba15-11ea-8494-d50b35490e44.gif)
![carsnip-mobile-scroller](https://user-images.githubusercontent.com/57966028/86012426-da6ede80-ba15-11ea-8785-bb64a581da61.gif)

# Desktop View
![carsnip-desktop-fullpage](https://user-images.githubusercontent.com/57966028/86012413-d5119400-ba15-11ea-9805-f1d7757a20b6.gif)


# Table Of Contents

-   [Technologies](#technologies)
-   [The Code](#some-snippets-from-the-code)
-   [Features](#features)


## Features

-   Context API
-   CSS Variables, animations, and transitions
-   Responsive for all devices
-   & more

## Technologies

-   HTML
-   CSS
-   JavaScript
-   ReactJS
-   NodeJS

## Some Snippets From The Code

### React Context API where prop drilling exceeds five layers

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

Each sub-component has it's own CSS file. Use of CSS Variables results in scalability

Media queries combine with CSS Variables for maintainable styling

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

Transitions and animations create a UI true to the original

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

Componentization + Hooks allows for easily maintainable code

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

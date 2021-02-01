const focusOnSearchBox = () => {
    document
        .querySelector(
            '#root > div > div > section > div.CarSearch > div.SearchWrapper > form > input'
        )
        .focus()
}

export { focusOnSearchBox }


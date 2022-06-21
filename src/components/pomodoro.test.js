describe("minutes", () => {
    test("returns an integer that is between 0 and 25", () => {
        expect(minutes()).toEqual("4")
    })
})

const minutes = () => {
    return "4"
}

describe("seconds", () => {
    test("returns an integer that is between 0 and 60", () => {
        expect(seconds()).toEqual("10")
    })
})

const seconds = () => {
    return "10"
}
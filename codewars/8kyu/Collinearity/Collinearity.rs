fn collinearity(x1: i32, y1: i32, x2: i32, y2: i32) -> bool {
    return (x1 * y2) == (y1 * x2)
}
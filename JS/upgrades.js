function upgrade(n) {
    n = D(n)
    if (D.lte(D.mul(25,D.pow(12,n)), points)) {
        points = D.sub(points, D.mul(25,D.pow(12,n)))
        c = D.add(c, D.mul(1,D.pow(10,n)))
    }
}
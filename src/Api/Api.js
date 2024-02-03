import BaseUrl from "../constant/BaseUrl"

export const getProducts = async () => {
    const res = await fetch(BaseUrl + "/products");
    return res.json()
}

export const getCategory = async () => {
    const res = await fetch(BaseUrl + "/categories")
    return res.json()
}
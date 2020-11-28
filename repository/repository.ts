export interface Repository {
    get(id: string): Promise<Object|null>
    list(params?:Object): Promise<Array<Object>>
    create(object: Object): Promise<Object>
    update(id: string, object: Object): Promise<Object|null>
}
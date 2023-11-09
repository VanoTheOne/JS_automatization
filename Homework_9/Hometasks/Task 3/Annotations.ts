"use strict"

export class ObjectManipulator {
    constructor(protected obj: Record<string, string>) {
        }

    public set(key: string, value: string): ObjectManipulator {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator {
        const newObj: Record<string, string> = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): Record<string, string> {
        return this.obj;
    }
}
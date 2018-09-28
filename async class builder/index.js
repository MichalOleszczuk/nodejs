class MyClass {
    constructor (async_param) {
        if (typeof async_param === 'undefined') {
            throw new Error('Cannot be called directly');
        };
        this.name = 'Hello';
    }

    static async build () {
        const async_result = await Promise.resolve({}).catch(error => {
            throw error;
        });
        return new MyClass(async_result);
    }
}

MyClass.build().then(instance => console.log(instance.name))

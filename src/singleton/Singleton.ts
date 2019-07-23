class Singleton{

    private static readonly singleton: Singleton = new Singleton();

    private constructor(){}

    public static getInstance(): Singleton{
        return this.singleton;
    }
}


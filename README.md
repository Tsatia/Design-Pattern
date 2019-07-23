# Design-Pattern
Compile all the files in `src` using the typescript compiler `tsc`.

Now you can run a single file using `node patternName/fileName.js`.

#### Singleton
The singleton pattern restricts the instantiation of a class to one "single" instance and provide a global point of access to it. This is useful when exactly one object is needed to coordinate actions across the system.

##### Main idea
Make the class of the single instance object responsible for creation, initialization, access, and enforcement. Declare the instance as a private static data member. Provide a public static member function that encapsulates all initialization code, and provides access to the instance.

The singleton design pattern solves problems like:


+ How can it be ensured that a class has only one instance?
+ How can the sole instance of a class be accessed easily?
+ How can a class control its instantiation?
+ How can the number of instances of a class be restricted?

The singleton design pattern describes how to solve such problems:

+ Hide the constructor of the class.
+ Define a public static operation (getInstance()) that returns the sole instance of the class.

###### Example
Imagine we are powerful enough to create humans. To make sure we don't create alliens we need each human to have just one head and not more. We need to make sure each time we "create" a human we only have one instance of head. This is "one" of our singletons in the creation of humans. 

# counterUp

CounterUp is a pure javascript, light weight (1600 bytes) counter to display counting up or down to a numeric value in a given frame of time. Useful to show how many happy customers you have on that trendy website you are building.

With counterUp you can easily build simple up/down counters, elapsing time, countdowns and much more.


# Installation


Just get the count-up.js file here and include it in your HTML. Done.


# Usage


counterUp just need one or more HTML elements to hold the displayed value. You can bind the countUp to as many elements as you want using standard CSS selectors.

Params:
- `selector` = the selector used to bind the counterUp to DOM elements
- `duration` = the total duration in ms until the target value is reached
- `prepend`  = a string to prepend to the numeric value (for example a $ sign)
- `append`   = a string to append to the numeric value (for example a % sign)
- `start`    = the starting value of the count
- `end`      = the ending value of the count
- `intvalues` = set true if we want to show floating point values (it uses 2 decimals)
- `interval` = the refresh interval of the counter in ms

Create one or more instances of counterUp like so:

```
var mycounter = new counterUp({
        selector: '.myselector',
        duration: 2000
    });
```

When you're ready to go, just call the start method and see the numbers go. Jeeez!

`mycounter.start();`

You can both set global parameters while creating the counterUp instance, or set a different parameter for every DOM element specifying the parameter you want to set using `cup-parametername` attributes.

```
<span class=".myselector" cup-duration="3000" cup-end="100" cup-append="% completed"></span>
<span class=".myselector" cup-duration="6000" cup-end="2500" cup-prepend="$"></span>

```

Have fun counting!

/*
Task
You have a keyboard like this:

!!

You strictly abide by the typing standard. That is, use the left hand hit the left part of the keyboard, use the right hand hit the right part of keyboard, the boundary is:

 L     1.....5 | 6.....0     R
 E     Q.....T | Y.....P     I
 F     A.....G | H.....'     G
 T     Z.....B | N...../     H
          SPACEBAR           T
Note: the SpaceBar is an exception, because both hands can be used to hit it.

Complete the function that accepts a string.

if the string can be typed by the left hand only, return "Left"
if the string can be typed by the right hand only, return "Right"
if both hands are needed to type the string, return "Both"
if the string is empty or contains only spaces, return an empty string ""
Please remember that we are discussing the keyboard above and not any other one. The reason is that we need a standard. And we will not test characters that are outside the control of both hands (please see the boundary).

Examples
"qwert"    -->  "Left"
"yuiop"    -->  "Right"
"abc"      -->  "Left"
"ABC"      -->  "Left"
"a b c"    -->  "Left"
"xyz"      -->  "Both"
"look up"  -->  "Right"
"^&*()"    -->  "Right"
""         -->  ""
"  "       -->  ""

*/
const LEFT = /[!#-%1-5@a-gq-tv-xz]/i;
const RIGHT = /[&-*,.06-9;^h-puy]/i;

function leftRightOrBoth(text) {
  const l = LEFT.test(text),
    r = RIGHT.test(text);
  return l && r ? "Both" : l ? "Left" : r ? "Right" : "";
}

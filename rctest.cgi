#!/bin/sh -ax

#Send out the serial command in Hex code

beta = $1
gamma = $2
echo "s0 $1" > /dev/ttyAMA0
echo "s1 $2" > /dev/ttyAMA0
 
 
 
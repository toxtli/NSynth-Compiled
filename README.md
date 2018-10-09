Static demo link: http://www.carlostoxtli.com/NSynth-Compiled/.

This is the source code and sounds to the A.I. Experiment, [NSynth: Sound Maker](https://aiexperiments.withgoogle.com/sound-maker).  

This experiment lets you play with new sounds created with machine learning. It's built using [Nsynth](https://magenta.tensorflow.org/nsynth), a research project that trained a neural network on over 300,000 instrument sounds. 

NSynth lets you select and combine two sound sources. Use the slider to change the interpolation between the two sound sources.


## CREDITS

Built by [Yotam Mann](https://github.com/tambien) with friends on the Magenta and Creative Lab teams at Google. It uses [TensorFlow](https://tensorflow.org), [Tone.js](https://github.com/Tonejs/Tone.js) and open-source tools from the [Magenta](https://magenta.tensorflow.org/) project. Check out more at [A.I. Experiments](https://aiexperiments.withgoogle.com).

## Building

This repo has an already compiled version, ready to use.

You can then run a local server to play the site.  

## Audio files

All of the sound combinations can be found in the `sounds` folder. The files are named with the two instrument sounds and an underscore in between. Inside the file you will find 35 mp3 files. The mp3s are named with their interpolation point (0-4), then an underscore, then their midi note value.

For example, `Bass_Trombone_Solo_A_bike_bell/1_68.mp3` is a combination of `Bass_Trombone_Solo_A` and `bike bell`. Since the file is called `1_68.mp3`, that means it's the second interpolation point between trombone and bike bell (25% trombone and 75% bell) and the note value is 68 (G#5). 

The samples aren't always perfectly in tune and they do sound a bit unusual – but we think that’s what makes them fun. 

## Keyboard

You can play the keyboard by touching or clicking the keys or plug in a MIDI keyboard. The center row of your computer keyboard will also trigger the keys. 

(this["webpackJsonpjm-glass"]=this["webpackJsonpjm-glass"]||[]).push([[0],{21:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.compareWithKnownShapes=n.SHAPES=n.Shape=n.CLASSIC=n.BAR_CHORD=n.ShapeDifficulty=void 0,function(e){e[e.EASY=1]="EASY",e[e.MEDIUM=5]="MEDIUM",e[e.HARD=10]="HARD"}(r=n.ShapeDifficulty||(n.ShapeDifficulty={})),n.BAR_CHORD=1,n.CLASSIC=2;var i=function(){function e(e,n,t){void 0===n&&(n=r.HARD),void 0===t&&(t=0),this.difficulty=n,this.extra=t;var i=Math.min.apply(Math,e.filter((function(e){return-1!==e})));this.locations=e.map((function(e){return-1===e?-1:e-i}))}return e.prototype.compare=function(e){var n=this,t=0;return e.locations.forEach((function(r,i){var o=Math.abs(n.locations[i]-e.locations[i]);t+=o*o})),{difficulty:this.difficulty+t,match:0===t}},e}();n.Shape=i,n.SHAPES=[new i([0,0,0,0,0,0],r.EASY,n.BAR_CHORD),new i([0,0,2,2,2,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([0,4,-1,2,5,0],r.HARD),new i([0,2,2,1,0,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,2,2,2,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,3,-1,-1,1],r.EASY),new i([-1,0,3,2,2,1],r.EASY,n.BAR_CHORD),new i([-1,0,-1,2,2,1],r.HARD),new i([-1,0,2,1,2,0],r.MEDIUM),new i([0,0,2,4,2,0],r.EASY,n.BAR_CHORD),new i([-1,0,7,6,0,0],r.EASY),new i([-1,0,0,2,2,0],r.EASY,n.BAR_CHORD),new i([-1,-1,0,2,2,0],r.EASY,n.BAR_CHORD),new i([-1,-1,0,6,5,5],r.EASY),new i([-1,-1,0,9,10,9],r.EASY),new i([3,-1,2,2,2,0],r.HARD),new i([-1,0,2,0,2,0],r.EASY),new i([-1,0,2,2,2,3],r.EASY,n.BAR_CHORD),new i([0,0,2,2,2,2],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([0,-1,4,2,2,0],r.MEDIUM),new i([2,-1,2,2,2,0],r.HARD),new i([-1,0,4,2,2,0],r.EASY,n.BAR_CHORD),new i([-1,-1,0,0,0,0],r.EASY,n.BAR_CHORD),new i([0,2,2,-1,-1,0],r.MEDIUM),new i([-1,0,2,2,-1,0],r.MEDIUM),new i([5,7,7,-1,-1,0],r.MEDIUM),new i([0,0,2,0,2,2],r.HARD),new i([5,5,4,0,3,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,2,0,3,2],r.MEDIUM),new i([1,0,3,0,2,1],r.HARD),new i([-1,0,0,0,2,0],r.EASY),new i([-1,0,2,0,3,0],r.MEDIUM),new i([-1,0,2,0,3,3],r.MEDIUM),new i([-1,0,2,2,3,3],r.MEDIUM),new i([5,-1,0,0,3,0],r.HARD),new i([-1,0,0,0,-1,0],r.HARD),new i([-1,-1,0,2,2,1],r.MEDIUM),new i([-1,3,2,1,1,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,-1,0,1,0,3],r.MEDIUM),new i([-1,0,2,0,1,0],r.MEDIUM),new i([-1,-1,0,0,0,1],r.EASY,n.BAR_CHORD),new i([-1,-1,0,1,0,0],r.EASY,n.BAR_CHORD),new i([0,2,0,1,0,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([0,2,2,1,3,0],r.MEDIUM,n.BAR_CHORD|n.CLASSIC),new i([-1,2,0,1,3,0],r.MEDIUM),new i([-1,-1,0,4,4,4],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,2,0,1,0,1],r.MEDIUM),new i([-1,-1,0,1,0,1],r.MEDIUM,n.BAR_CHORD),new i([-1,-1,2,0,0,0],r.EASY),new i([0,2,1,1,0,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([0,-1,6,4,4,0],r.HARD),new i([-1,-1,1,1,0,0],r.EASY,n.BAR_CHORD),new i([-1,-1,2,2,0,0],r.EASY,n.BAR_CHORD),new i([0,3,-1,2,4,0],r.HARD),new i([-1,-1,0,2,1,2],r.MEDIUM),new i([-1,-1,0,1,0,2],r.MEDIUM),new i([-1,0,2,2,1,0],r.EASY,n.BAR_CHORD),new i([-1,0,7,5,5,5],r.MEDIUM),new i([-1,3,2,2,1,0],r.EASY),new i([8,12,-1,-1,-1,0],r.HARD),new i([0,0,7,5,0,0],r.MEDIUM),new i([-1,3,2,2,0,0],r.EASY),new i([-1,-1,0,2,1,0],r.EASY,n.BAR_CHORD),new i([-1,-1,0,5,5,5],r.EASY),new i([0,0,3,2,1,0],r.EASY,n.BAR_CHORD),new i([1,3,3,2,1,0],r.HARD),new i([1,-1,2,2,1,0],r.HARD),new i([-1,-1,3,2,1,0],r.EASY,n.BAR_CHORD),new i([0,0,2,0,1,3],r.MEDIUM),new i([-1,0,2,2,1,3],r.MEDIUM),new i([-1,0,5,5,5,8],r.HARD),new i([-1,0,2,2,1,2],r.MEDIUM),new i([-1,-1,1,1,0,1],r.HARD),new i([-1,5,7,5,8,0],r.MEDIUM),new i([-1,0,6,5,5,7],r.MEDIUM),new i([0,0,2,2,3,0],r.MEDIUM,n.BAR_CHORD|n.CLASSIC),new i([-1,0,2,2,3,0],r.MEDIUM,n.BAR_CHORD),new i([5,5,7,7,-1,0],r.HARD),new i([-1,0,0,2,3,0],r.MEDIUM,n.BAR_CHORD),new i([0,0,2,2,0,0],r.EASY,n.BAR_CHORD),new i([0,0,2,4,0,0],r.MEDIUM,n.BAR_CHORD),new i([0,2,2,2,0,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,2,2,0,0],r.EASY,n.BAR_CHORD),new i([-1,0,2,1,0,0],r.EASY,n.BAR_CHORD),new i([0,2,0,2,0,0],r.MEDIUM),new i([-1,2,0,2,3,0],r.MEDIUM),new i([-1,2,1,2,0,0],r.MEDIUM),new i([0,0,3,2,0,0],r.MEDIUM,n.BAR_CHORD),new i([3,-1,2,2,0,0],r.HARD),new i([-1,0,2,0,0,0],r.EASY,n.BAR_CHORD),new i([-1,0,5,4,5,0],r.MEDIUM),new i([-1,0,4,4,0,0],r.EASY),new i([4,-1,0,2,3,0],r.HARD),new i([0,1,-1,2,3,0],r.HARD),new i([-1,-1,7,7,6,0],r.EASY),new i([0,0,0,2,3,2],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([0,0,4,2,3,0],r.MEDIUM),new i([2,-1,0,2,3,0],r.HARD),new i([-1,0,2,2,3,2],r.MEDIUM),new i([-1,-1,0,0,1,0],r.EASY),new i([-1,5,4,2,3,0],r.MEDIUM),new i([-1,9,7,7,-1,0],r.HARD),new i([3,2,1,0,0,3],r.MEDIUM),new i([3,-1,1,0,0,3],r.HARD),new i([2,-1,1,2,0,2],r.HARD),new i([-1,0,1,2,0,2],r.MEDIUM),new i([-1,2,1,2,0,2],r.HARD),new i([-1,-1,4,4,4,0],r.EASY),new i([0,0,4,4,4,0],r.EASY,n.CLASSIC),new i([0,2,1,2,0,2],r.MEDIUM),new i([3,-1,1,0,0,0],r.HARD),new i([-1,-1,1,0,0,0],r.MEDIUM,n.BAR_CHORD),new i([-1,-1,0,3,3,1],r.MEDIUM,n.BAR_CHORD),new i([-1,-1,0,3,3,2],r.MEDIUM,n.BAR_CHORD),new i([-1,-1,0,3,-1,0],r.HARD),new i([0,0,2,1,2,0],r.MEDIUM),new i([-1,-1,0,6,6,6],r.EASY),new i([-1,1,3,3,3,0],r.MEDIUM),new i([0,2,0,0,0,0],r.EASY,n.BAR_CHORD),new i([-1,0,2,2,-1,5],r.HARD),new i([-1,0,0,0,0,0],r.EASY,n.BAR_CHORD),new i([2,-1,4,3,3,0],r.HARD),new i([-1,3,-1,3,2,0],r.HARD),new i([-1,-1,0,3,2,0],r.MEDIUM),new i([-1,1,2,0,2,0],r.MEDIUM),new i([-1,-1,4,3,2,0],r.EASY),new i([0,0,2,2,1,0],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,0,0,0,2],r.EASY,n.BAR_CHORD),new i([0,1,2,1,2,0],r.MEDIUM),new i([-1,2,0,2,0,1],r.MEDIUM),new i([-1,-1,0,2,0,1],r.MEDIUM,n.BAR_CHORD),new i([1,-1,0,0,0,3],r.MEDIUM),new i([3,2,0,0,0,1],r.EASY,n.BAR_CHORD),new i([-1,-1,0,4,3,2],r.MEDIUM),new i([-1,0,4,4,3,2],r.MEDIUM,n.BAR_CHORD),new i([-1,2,0,2,0,2],r.HARD),new i([-1,2,0,2,3,2],r.MEDIUM),new i([-1,-1,0,2,0,2],r.MEDIUM),new i([2,2,0,0,0,3],r.MEDIUM),new i([2,2,0,0,3,3],r.MEDIUM),new i([3,2,0,0,0,2],r.MEDIUM),new i([0,0,2,4,3,2],r.MEDIUM),new i([0,2,0,2,0,2],r.HARD),new i([-1,0,1,1,2,0],r.MEDIUM,n.BAR_CHORD),new i([7,9,9,-1,-1,0],r.HARD),new i([-1,2,4,4,-1,0],r.HARD),new i([-1,2,2,2,-1,0],r.HARD),new i([-1,4,4,4,-1,0],r.HARD),new i([0,2,2,1,0,2],r.MEDIUM),new i([0,-1,4,1,0,0],r.HARD),new i([2,2,2,1,0,0],r.MEDIUM,n.BAR_CHORD),new i([0,2,2,0,0,2],r.MEDIUM),new i([0,2,4,0,0,0],r.MEDIUM,n.BAR_CHORD),new i([0,-1,4,0,0,0],r.HARD),new i([2,2,2,0,0,0],r.EASY,n.BAR_CHORD),new i([0,3,2,0,1,0],r.MEDIUM),new i([0,3,5,5,5,3],r.MEDIUM),new i([3,3,2,0,1,0],r.EASY),new i([3,-1,2,0,1,0],r.HARD),new i([-1,3,2,0,1,0],r.EASY,n.BAR_CHORD),new i([-1,3,5,5,5,0],r.MEDIUM),new i([-1,-1,4,5,-1,0],r.HARD),new i([0,3,2,0,0,0],r.MEDIUM,n.BAR_CHORD),new i([-1,2,2,0,1,0],r.MEDIUM),new i([3,-1,0,0,1,0],r.HARD),new i([-1,3,0,0,1,0],r.MEDIUM),new i([-1,3,2,0,3,0],r.MEDIUM),new i([-1,3,2,0,3,3],r.MEDIUM),new i([-1,-1,0,5,5,3],r.MEDIUM),new i([-1,10,12,12,13,0],r.MEDIUM),new i([-1,5,5,5,-1,0],r.HARD),new i([-1,3,3,0,1,0],r.MEDIUM),new i([-1,-1,3,0,1,0],r.MEDIUM),new i([0,3,-1,3,3,2],r.HARD),new i([-1,3,2,3,2,0],r.MEDIUM),new i([-1,-1,2,2,1,0],r.EASY,n.BAR_CHORD),new i([-1,3,0,0,0,0],r.EASY,n.BAR_CHORD),new i([-1,3,3,0,1,1],r.MEDIUM),new i([-1,-1,3,0,1,1],r.MEDIUM),new i([-1,7,9,9,10,0],r.MEDIUM),new i([-1,3,0,0,3,3],r.MEDIUM),new i([-1,2,4,2,5,0],r.MEDIUM),new i([-1,-1,0,2,1,3],r.MEDIUM),new i([3,3,0,0,0,3],r.MEDIUM),new i([-1,3,0,0,0,3],r.MEDIUM),new i([3,3,0,0,1,1],r.MEDIUM),new i([2,-1,2,1,0,0],r.HARD,n.BAR_CHORD),new i([-1,-1,2,1,0,2],r.MEDIUM),new i([-1,3,3,0,0,3],r.MEDIUM),new i([-1,7,5,5,-1,0],r.HARD),new i([2,0,0,2,3,2],r.MEDIUM),new i([-1,0,0,2,3,2],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,0,4,2,3,2],r.HARD),new i([-1,-1,0,2,3,2],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([-1,-1,0,7,7,5],r.MEDIUM),new i([-1,3,5,3,5,0],r.MEDIUM),new i([-1,0,0,2,1,2],r.MEDIUM),new i([-1,1,-1,0,1,0],r.HARD),new i([-1,-1,0,14,14,14],r.EASY),new i([-1,-1,0,2,2,2],r.EASY,n.BAR_CHORD),new i([5,-1,4,0,3,5],r.HARD),new i([3,-1,0,2,3,2],r.HARD),new i([0,0,2,2,-1,0],r.HARD),new i([-1,0,0,2,3,5],r.MEDIUM),new i([0,0,0,2,1,2],r.MEDIUM),new i([2,-1,0,2,1,0],r.HARD),new i([-1,5,7,5,7,0],r.MEDIUM),new i([-1,-1,2,0,1,0],r.MEDIUM,n.BAR_CHORD),new i([-1,-1,2,2,2,0],r.EASY,n.BAR_CHORD),new i([-1,-1,3,0,2,1],r.MEDIUM),new i([-1,4,3,4,0,4],r.HARD),new i([0,2,2,0,2,0],r.MEDIUM),new i([3,-1,0,0,2,0],r.HARD),new i([-1,-1,0,0,2,0],r.EASY),new i([-1,-1,2,1,2,0],r.MEDIUM),new i([-1,4,6,6,-1,0],r.HARD),new i([0,2,2,1,2,0],r.MEDIUM),new i([-1,-1,0,1,1,1],r.EASY),new i([-1,0,0,2,3,1],r.MEDIUM),new i([-1,-1,0,2,1,1],r.EASY),new i([-1,-1,0,5,6,5],r.MEDIUM),new i([3,-1,0,2,1,1],r.HARD),new i([5,-1,0,0,3,5],r.HARD),new i([3,0,0,0,3,3],r.MEDIUM),new i([-1,0,0,0,3,3],r.EASY),new i([-1,-1,0,2,3,3],r.MEDIUM),new i([-1,-1,0,2,3,0],r.MEDIUM),new i([3,0,0,0,0,3],r.MEDIUM),new i([3,2,0,2,0,3],r.MEDIUM),new i([-1,7,6,4,5,0],r.MEDIUM),new i([0,0,3,4,3,4],r.MEDIUM),new i([0,2,-1,-1,-1,0],r.HARD),new i([-1,7,9,9,-1,0],r.HARD),new i([-1,0,0,1,0,0],r.EASY,n.BAR_CHORD),new i([0,1,3,1,3,1],r.MEDIUM),new i([0,2,0,1,0,2],r.MEDIUM),new i([2,2,0,1,0,0],r.MEDIUM,n.BAR_CHORD|n.CLASSIC),new i([-1,-1,5,3,4,0],r.MEDIUM),new i([3,-1,0,3,3,0],r.HARD),new i([0,2,2,0,0,0],r.EASY,n.BAR_CHORD),new i([3,-1,2,0,0,0],r.HARD),new i([-1,2,5,-1,-1,0],r.HARD),new i([0,2,0,0,3,0],r.EASY),new i([0,2,2,0,3,0],r.MEDIUM),new i([0,2,2,0,3,3],r.MEDIUM),new i([-1,-1,0,12,12,12],r.EASY),new i([-1,-1,0,9,8,7],r.EASY),new i([0,-1,0,0,0,0],r.HARD),new i([-1,10,12,12,12,0],r.MEDIUM),new i([0,0,0,0,0,3],r.EASY,n.BAR_CHORD),new i([3,-1,0,2,0,0],r.HARD),new i([0,2,0,0,0,2],r.EASY),new i([0,2,0,0,3,2],r.MEDIUM),new i([2,2,0,0,0,0],r.EASY),new i([0,2,1,1,0,2],r.MEDIUM),new i([4,-1,4,4,4,0],r.HARD),new i([0,6,4,0,0,0],r.EASY),new i([-1,0,3,2,1,1],r.MEDIUM),new i([-1,2,2,1,0,0],r.EASY,n.BAR_CHORD),new i([-1,-1,2,1,0,0],r.EASY),new i([-1,7,9,-1,-1,0],r.HARD),new i([-1,2,2,0,0,0],r.EASY,n.BAR_CHORD),new i([0,2,3,2,1,0],r.MEDIUM),new i([1,3,3,2,0,0],r.MEDIUM),new i([0,0,3,0,1,3],r.MEDIUM),new i([3,2,0,0,0,3],r.EASY),new i([3,2,0,0,3,3],r.MEDIUM),new i([3,-1,0,0,0,3],r.HARD),new i([-1,-1,0,4,3,3],r.EASY),new i([-1,-1,0,7,8,7],r.MEDIUM),new i([3,-1,0,0,3,3],r.HARD),new i([-1,3,0,0,0,1],r.MEDIUM),new i([-1,0,0,0,0,1],r.EASY,n.BAR_CHORD),new i([-1,0,1,0,1,1],r.HARD),new i([-1,0,4,3,2,0],r.MEDIUM,n.BAR_CHORD),new i([-1,2,2,2,0,0],r.EASY,n.BAR_CHORD),new i([-1,-1,0,3,3,3],r.EASY,n.BAR_CHORD),new i([0,0,3,3,3,3],r.EASY,n.BAR_CHORD|n.CLASSIC),new i([5,0,0,0,3,0],r.EASY)];n.compareWithKnownShapes=function(e){var t,r,i={difficulty:50,shape:null};return n.SHAPES.forEach((function(n){var t=n.compare(e);t.difficulty<i.difficulty&&(i.difficulty=t.difficulty,i.shape=n)})),{min:i.difficulty,extras:null!==(r=null===(t=null===i||void 0===i?void 0:i.shape)||void 0===t?void 0:t.extra)&&void 0!==r?r:0}}},22:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.parseShortName=n.getChordByShortName=n.getChordByName=n.CHORDS=n.ChordSpelling=n.Tone=n.AUGMENTS=n.SCALES=n.Scale=n.getNoteFromMIDI=n.getNoteByName=n.CircleOfFifths=n.CircleOfFifthsImpl=n.SCALE_NOTES=n.IONIAN_SCALE=void 0,n.IONIAN_SCALE=[2,2,1,2,2,2,1],n.SCALE_NOTES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];var r=function(){this.scales=[];for(var e=0;e<=12;e++){var t=e;this.scales[e]=[t];for(var r=0;r<=14;r++)t+=n.IONIAN_SCALE[r%7],this.scales[e].push(t%12)}};n.CircleOfFifthsImpl=r,n.CircleOfFifths=new r;n.getNoteByName=function(e){return n.SCALE_NOTES.findIndex((function(n){return n===e.toUpperCase()}))};n.getNoteFromMIDI=function(e){return e%12};var i=function(e,n){this.name=e,this.intervals=n};n.Scale=i,n.SCALES=[new i("Ionian (major)",[2,2,1,2,2,2,1]),new i("Dorian",[2,1,2,2,2,1,2]),new i("Phrygian",[1,2,2,2,1,2,2]),new i("Lydian",[2,2,2,1,2,2,1]),new i("Mixolydian",[2,2,1,2,2,1,2]),new i("Aeolian",[2,1,2,2,1,2,2]),new i("Locrian",[1,2,2,1,2,2,2]),new i("Chromatic",[1,1,1,1,1,1,1,1,1,1,1,1]),new i("Adolfos Scale",[1,2,2,1,1,2,2]),new i("Diminished",[2,1,2,1,2,1,2,1]),new i("Enigmatic",[1,3,2,2,2,1,1]),new i("Harmonic Minor",[2,1,2,2,1,3,1]),new i("Hungarian Minor",[2,1,3,1,1,3,1]),new i("Melodic Minor",[2,1,2,2,2,2,1]),new i("Neapolitan",[1,2,2,2,2,2,1]),new i("Neapolitan Minor",[1,2,2,2,1,3,1]),new i("Pentatonic",[2,2,3,2,3]),new i("Pentatonic Minor",[3,2,2,3,2]),new i("Ten Tone",[1,2,1,1,1,1,2,1,1]),new i("Whole Tone",[2,2,2,2,2,2])],n.AUGMENTS={"#":1,"##":2,b:-1,bb:-2,"":0};var o=function(){function e(e,n){this.root=e,this.augment=n}return e.parse=function(t){var r,i=t.match(/^(\d+)(.*)$/);return i?new e(parseInt(i[1]),null!==(r=n.AUGMENTS[null===i||void 0===i?void 0:i[2]])&&void 0!==r?r:0):null},e}();n.Tone=o;var a=function(){function e(e,n,t){this.name=e,this.shortName=n,this.tones=t.split(",").map((function(e){return o.parse(e)}))}return e.prototype.note=function(e,t){return(n.CircleOfFifths.scales[e][t.root-1]+t.augment+12)%12},e.prototype.notes=function(e){var n=this;return this.tones.map((function(t){return n.note(e,t)}))},e.prototype.inversions=function(e){var n={};return this.notes(e).forEach((function(e,t){n[e]=t+1})),n},e}();n.ChordSpelling=a,n.CHORDS=[new a("Maj.",",maj","1,3,5"),new a("11th","11","1,3,5,7b,9,11"),new a("11th-9",null,"1,3,5,7b,9b,11"),new a("13th","13","1,3,5,7b,9,11,13"),new a("13th no 5th",null,"1,3,7b,9,11,13"),new a("6th","6","1,3,5,6"),new a("6th-7",null,"1,3,5,6,7b"),new a("6th-7 Sus.",null,"1,4,5,6,7b"),new a("7th","7","1,3,5,7b"),new a("7th-9+5",null,"1,3,5#,7b,9b"),new a("7th+11","7+11","1,3,5,7b,9,11#"),new a("7th+5","7+5","1,3,5#,7b"),new a("7th+9","7+9","1,3,5,7b,9#"),new a("7th+9+5",null,"1,3,5#,7b,9#"),new a("7th+9-5",null,"1,3,5b,7b,9#"),new a("7th-5","7-5","1,3,5b,7b"),new a("7th-9","7-9","1,3,5,7b,9b"),new a("7th-9-5",null,"1,3,5b,7b,9b"),new a("7th Sus. 4","7sus4","1,4,5,7b"),new a("7th-11",null,"1,3,5,7b,11"),new a("9th","9","1,3,5,7b,9"),new a("9th+5","9+5","1,3,5#,7b,9"),new a("9th-5","9-5","1,3,5b,7b,9"),new a("Add +11",null,"1,3,5,11#"),new a("Add 9","add9","1,3,5,9"),new a("Aug.","aug","1,3,5#"),new a("Dim.","dim","1,3b,5b"),new a("Dim. 7th","dim7,7dim","1,3b,5b,7bb"),new a("Maj. 6 add 9",null,"1,3,5,6,9"),new a("Maj. 7th","maj7,7maj","1,3,5,7"),new a("Maj. 7th+11",null,"1,3,5,7,11#"),new a("Maj. 7th+5",null,"1,3,5#,7"),new a("Maj. 7th-5",null,"1,3,5b,7"),new a("Maj. 9th","maj9,9maj","1,3,5,7,9"),new a("Maj. 9th+11",null,"1,3,5,7,9,11#"),new a("Maj.-Min. 7th",null,"1,3b,5,7"),new a("Min.","m,min","1,3b,5"),new a("Min. 11th","maj11","1,3b,5,7b,9,11"),new a("Min. 6th","maj6","1,3b,5,6"),new a("Min. 6th Add 9",null,"1,3b,5,6,9"),new a("Min. 6th-7",null,"1,3b,5,6,7b"),new a("Min. 6th-7-11",null,"1,3b,5,6,7b,11"),new a("Min. 7th","maj7","1,3b,5,7b"),new a("Min. 7th-5",null,"1,3b,5b,7b"),new a("Min. 7th-9",null,"1,3b,5,7b,9b"),new a("Min. 7th-11",null,"1,3b,5,7b,11"),new a("Min. 9th","maj9","1,3b,5,7b,9"),new a("Min. 9th-5",null,"1,3b,5b,7b,9"),new a("Min. Add 9","min+9","1,3b,5,9"),new a("Min.-Maj. 9th",null,"1,3b,5,7,9"),new a("Sus. 4","sus4","1,4,5")];n.getChordByName=function(e){return n.CHORDS.find((function(n){return n.name===e}))};n.getChordByShortName=function(e){return n.CHORDS.filter((function(e){return e.shortName})).find((function(n){var t;return null===(t=n.shortName)||void 0===t?void 0:t.split(",").includes(e)}))};n.parseShortName=function(e){var t,r=e.match(/([A-Z](?:[b#])?)(.*?)$/i);if(!r)return null;var i=0;if(r[1].search(/[A-Z]b/i)){var o=null===(t=r[1].match(/([A-Z])/))||void 0===t?void 0:t[1];if(!o)return null;i=(n.getNoteByName(o[1])+11)%12}else i=n.getNoteByName(r[1]);return{root:i,chord:n.getChordByShortName(e)}}},33:function(e,n,t){},35:function(e,n,t){"use strict";var r=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),i=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r};Object.defineProperty(n,"__esModule",{value:!0}),n.chordFinder=n.StringedChord=n.StringedInstrument=n.getTuningsByStringCount=n.getTuningByName=n.TUNINGS=n.Tuning=n.StringedInstrumentLocation=void 0;var o=t(22),a=t(21),c=function(e,n){this.string=e,this.fret=n};n.StringedInstrumentLocation=c;var u=function(e,n){this.name=e,this.intervals=n};n.Tuning=u,n.TUNINGS=[new u("Guitar Standard",[0,5,5,5,4,5]),new u("D Modal",[-2,7,5,5,2,5]),new u("Dropped D",[-2,7,5,5,4,5]),new u("Dropped D & A",[-2,7,5,5,2,7]),new u("Dropped semi-tone",[-1,5,5,5,4,5]),new u("Dropped whole-tone",[-2,5,5,5,4,5]),new u("G Modal",[-2,5,7,5,5,2]),new u("Open C",[-4,7,5,7,5,4]),new u("Open C II",[0,3,5,4,8,7]),new u("Open D",[-2,7,5,4,3,5]),new u("Open D Minor",[-2,7,5,3,4,5]),new u("Open E",[0,7,5,4,3,5]),new u("Open E Minor",[0,7,5,3,4,5]),new u("Open Eb",[-1,5,5,5,4,5]),new u("Open G",[-2,5,7,5,4,3]),new u("Bass Standard",[0,5,5,5])];n.getTuningByName=function(e){var t;return null!==(t=n.TUNINGS.find((function(n){return n.name===e})))&&void 0!==t?t:n.TUNINGS[0]};n.getTuningsByStringCount=function(e){return n.TUNINGS.filter((function(n){return n.intervals.length===e}))};var w=function(){function e(e,n,t){var r=this;this.startNote=e,this.numFrets=n,this.tuningName="",this.tuning=[],this.midiTuning=[],this.tuningName=t.name;var i=this.startNote;t.intervals.forEach((function(e){i+=e,r.midiTuning.push(i),r.tuning.push(o.getNoteFromMIDI(i))}))}return Object.defineProperty(e,"bass",{get:function(){return new e(28,22,n.getTuningByName("Bass Standard"))},enumerable:!1,configurable:!0}),Object.defineProperty(e,"guitar",{get:function(){return new e(40,22,n.getTuningByName("Guitar Standard"))},enumerable:!1,configurable:!0}),e.prototype.findNotes=function(e){var n=this,t=[];return this.midiTuning.forEach((function(r,i){for(var o=e-r%12;o<n.numFrets;)o>=0&&t.push(new c(i,o)),o+=12})),t},Object.defineProperty(e.prototype,"numStrings",{get:function(){return this.tuning.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topNotes",{get:function(){return this.midiTuning},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topNames",{get:function(){return this.topNotes.map((function(e){return o.SCALE_NOTES[e%12]}))},enumerable:!1,configurable:!0}),e.prototype.noteAt=function(e,n){return-1!==n?this.midiTuning[e]+n:-1},e}();n.StringedInstrument=w;var s=function(){function e(e,n){void 0===n&&(n=[]),this.instrument=e,this.notes=n,0===this.notes.length&&(this.notes=this.instrument.midiTuning.map((function(){return-1}))),this.inversion=-1,this.playability=-1,this.extras=0,this.capo=0,this.calculatePlayability()}return e.prototype.toShape=function(){return new a.Shape(this.notes)},e.prototype.calculatePlayability=function(){var e=a.compareWithKnownShapes(this.toShape());this.playability=e.min,this.extras=e.extras},e.prototype.compare=function(e){var n=this,t=0;return e.notes.forEach((function(e,r){t+=Math.abs(n.notes[r]-e)})),t},e.prototype.contains=function(e){var n=!0;return this.notes.forEach((function(t,r){-1===t?-1!==e.notes[r]&&(n=!1):-1!==e.notes[r]&&e.notes[r]!==t&&(n=!1)})),n},Object.defineProperty(e.prototype,"maxFret",{get:function(){return Math.max.apply(Math,this.notes)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minFret",{get:function(){return Math.min.apply(Math,this.notes.filter((function(e){return e>-1})))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.maxFret-this.capo<=6},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasOpen",{get:function(){return this.minFret===this.capo&&this.isOpen},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classic",{get:function(){return 1===(this.extras&a.CLASSIC)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"barChord",{get:function(){return 1===(this.extras&a.BAR_CHORD)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this.notes.filter((function(e){return-1!==e})).length},enumerable:!1,configurable:!0}),e.prototype.setCapo=function(e){this.capo=e},Object.defineProperty(e.prototype,"midiNotes",{get:function(){var e=this;return this.notes.map((function(n,t){return e.instrument.noteAt(t,n)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lowestNote",{get:function(){return Math.min.apply(Math,this.midiNotes.filter((function(e){return-1!==e})))%12},enumerable:!1,configurable:!0}),e.prototype.setNote=function(e,n){this.notes[e]=n,this.calculatePlayability()},e.prototype.hasNote=function(e){return-1!==this.notes[e]},Object.defineProperty(e.prototype,"median",{get:function(){var e=0,n=0;return this.notes.filter((function(e){return-1!==e})).forEach((function(t){e+=t,n+=1})),n>0?e/n:0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"contiguous",{get:function(){var e;!function(e){e[e.Before=0]="Before",e[e.Inside=1]="Inside",e[e.Outside=2]="Outside"}(e||(e={}));var n=e.Before,t=!0;return this.notes.forEach((function(r){-1===r?n===e.Inside&&(n=e.Outside):(n===e.Before&&(n=e.Inside),n===e.Outside&&(t=!1))})),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"notation",{get:function(){return this.notes.map((function(e){return e.toString().padStart(2," ")})).join(" ")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"locationString",{get:function(){return this.midiNotes.join(" ")},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this.midiNotes.map((function(e){return-1!==e?o.SCALE_NOTES[o.getNoteFromMIDI(e)].padStart(2," "):"  "})).join(" ")},e}();n.StringedChord=s;!function(){function e(){this.distance=10,this.open=0,this.difficulty=10,this.bar=10,this.classic=10,this.noteCount=0}e.wide=function(){var n=new e;return n.noteCount=2e3,n},e.open=function(){var n=new e;return n.open=5e3,n.noteCount=1e3,n},e.easy=function(){var n=new e;return n.difficulty=500,n},e.barChords=function(){var n=new e;return n.bar=5e3,n},e.classic=function(){var n=new e;return n.classic=5e3,n},e.boxed=function(){var n=new e;return n.distance=1e3,n},e.prototype.weight=function(e,n){var t,r=null!==e?e.median:0,i=null!==n?n.median:0,o=1e4;o-=Math.abs(r-i)*this.distance;var a=0;return(null===n||void 0===n?void 0:n.isOpen)&&(a+=1),(null===n||void 0===n?void 0:n.hasOpen)&&(a+=10),o-=a*this.open,o-=(50-((null===n||void 0===n?void 0:n.playability)||50))*this.difficulty,o-=((null===n||void 0===n?void 0:n.classic)?1:0)*this.classic,o-=((null===n||void 0===n?void 0:n.barChord)?1:0)*this.bar,o-=(null!==(t=null===n||void 0===n?void 0:n.count)&&void 0!==t?t:0)*this.noteCount}}();var d=function(e){function n(n,t,r){var i=e.call(this)||this;return i.instrument=n,i.chord=t,i.root=r,i}return r(n,e),n.prototype.reorder=function(e,t){var r=this.map((function(n){return{weight:t.weight(e,n),chord:n}})).sort((function(e,n){return e.weight<n.weight?-1:e.weight===n.weight?0:1})),i=new n(this.instrument,this.chord,this.root);return r.forEach((function(e){var n=e.chord;return i.push(n)})),i},n}(Array);n.chordFinder=function(e,n,t,r){var o=function(){return new d(e,n,t)},a=n.notes(t),c=(null===r||void 0===r?void 0:r.distance)||4,u=function(n,t){void 0===t&&(t=!1);var r=o();return n.forEach((function(e){return r.push(e)})),a.forEach((function(n){if(0===r.length)e.findNotes(n).forEach((function(n){var t=new s(e);t.setNote(n.string,n.fret),r.push(t)}));else{var a=o();r.forEach((function(r){t&&a.push(r),e.findNotes(n).forEach((function(n){if(!r.hasNote(n.string)){var t=new s(e,i(r.notes));t.setNote(n.string,n.fret),t.maxFret-t.minFret<=c&&a.push(t)}}))})),r=a}})),r},w=o();w=u(w),(null===r||void 0===r?void 0:r.doubling)&&(w=u(w,!0),w=u(w,!0));var l={},h=o();w.forEach((function(e){var n=e.locationString;l[n]||h.push(e),l[n]=!0})),(w=h).sort((function(e,n){return e.count<n.count?1:e.count===n.count?0:-1}));var p=o();w.forEach((function(e){var n=!1;p.forEach((function(t){t.contains(e)&&(n=!0)})),n||p.push(e)})),(w=p).sort((function(e,n){var t=e.playability<n.playability?-1:e.playability===n.playability?0:1;return 0===t&&(t=e.minFret<n.minFret?-1:e.minFret===n.minFret?0:1),t}));var f=n.inversions(t);return w.forEach((function(e){e.inversion=f[e.lowestNote]})),w}},37:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(0),o=t.n(i),a=t(24),c=t.n(a),u=(t(33),t(1)),w=t(13),s=t(20),d=t.n(s),l=t(25),h=t(15),p=t(5),f=(t(36),t(37),t(3)),b=t(12),M=f.a.div({width:"100%",paddingLeft:"1.25rem",paddingRight:"1.25rem",marginLeft:"auto",marginRight:"auto","@media (min-width: 640px)":{maxWidth:"640px"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"@media (min-width: 1536px)":{maxWidth:"1536px"},display:"flex",paddingTop:"6rem",paddingBottom:"6rem",flexDirection:"column"}),D=f.a.div({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",alignItems:"center",fontWeight:"500",display:"flex",marginBottom:"1rem",width:"100%",position:"relative","@media (min-width: 768px)":{marginBottom:"0px",width:"25%"}}),m=f.a.header({"--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))",marginTop:"0.75rem",marginBottom:"0.75rem"}),A=f.a.div({width:"100%",marginLeft:"auto",marginRight:"auto","@media (min-width: 640px)":{maxWidth:"640px"},"@media (min-width: 768px)":{maxWidth:"768px",flexDirection:"row"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"@media (min-width: 1536px)":{maxWidth:"1536px"},display:"flex",flexWrap:"wrap",padding:"1.25rem",flexDirection:"column",alignItems:"center","--tw-bg-opacity":"1",backgroundColor:"rgba(219, 234, 254, var(--tw-bg-opacity))",borderRadius:"0.25rem"}),g=f.a.div({display:"grid",gridTemplateRows:"repeat(3, minmax(0, 1fr))",gap:"1rem","@media (min-width: 640px)":{gridAutoFlow:"row"},"@media (min-width: 768px)":{gridTemplateRows:"repeat(3, minmax(0, 1fr))",gridAutoFlow:"column"}}),E=f.a.div({zIndex:"50",position:"absolute",overflowY:"scroll",height:"100vh",left:"0px",marginTop:"0.5rem",transformOrigin:"top right","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(229, 231, 235, var(--tw-border-opacity))","> :not([hidden]) ~ :not([hidden])":{"--tw-divide-y-reverse":0,borderTopWidth:"calc(1px * calc(1 - var(--tw-divide-y-reverse)))",borderBottomWidth:"calc(1px * var(--tw-divide-y-reverse))","--tw-divide-opacity":"1",borderColor:"rgba(243, 244, 246, var(--tw-divide-opacity))"},borderRadius:"0.375rem","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",outline:"2px solid transparent",outlineOffset:"2px"}),R=f.a.button({width:"100%",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",fontSize:"0.75rem",lineHeight:"1rem","--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))"}),S=Object(f.a)(R)((function(e){return[e.selected&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 41, 55, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",borderTopLeftRadius:"0.375rem",borderBottomLeftRadius:"0.375rem"}]})),y=Object(f.a)(b.a.Button)({":focus":{outline:"2px solid transparent",outlineOffset:"2px","--tw-border-opacity":"1",borderColor:"rgba(147, 197, 253, var(--tw-border-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(31, 41, 55, var(--tw-text-opacity))"},"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(209, 213, 219, var(--tw-border-opacity))",borderRadius:"0.375rem",":hover":{"--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"},justifyContent:"center",display:"inline-flex","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",width:"100%","--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))",transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500"}),v=f.a.div({display:"flex",flexWrap:"wrap",alignItems:"center",fontSize:"1rem",lineHeight:"1.5rem",justifyContent:"center",width:"100%",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{display:"block",width:"75%"}}),O=f.a.button({borderRadius:"0.5rem",cursor:"pointer",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(107, 114, 128, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))"},display:"inline-block","--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))",textAlign:"center",width:"8.333333%",maxWidth:"28rem"}),C=Object(f.a)(O)((function(e){return[e.selected&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 41, 55, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",borderRadius:"9999px"}]})),I=f.a.div({"--tw-bg-opacity":"0.4",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))",borderRadius:"0.375rem"}),H=f.a.div({"--tw-bg-opacity":"0.4",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",borderBottomLeftRadius:"0.375rem",borderBottomRightRadius:"0.375rem",fontSize:"1.125rem",lineHeight:"1.75rem",padding:"0.5rem","--tw-text-opacity":"1",color:"rgba(29, 78, 216, var(--tw-text-opacity))",textAlign:"center",WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),x=f.a.div({width:"100%",textAlign:"center"}),U=f.a.div({padding:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgba(219, 234, 254, var(--tw-bg-opacity))",marginTop:"0.75rem",marginBottom:"0.75rem"}),j=f.a.button({paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",display:"inline-block","--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))",textAlign:"center"}),B=Object(f.a)(j)((function(e){return[e.selected&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 41, 55, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))",borderRadius:"9999px"}]})),_=t(26),Y={3:1,5:1,7:1,9:1,12:2,15:1,17:1,19:1},N=[3,3,2,2,1,1],L=[0,1,2,3,4,5],T=function(e){var n=e.chord,t=e.instrument,i=Math.min.apply(Math,Object(_.a)(n.notes.filter((function(e){return-1!==e}))));return Object(r.jsxs)("svg",{style:{minHeight:260,maxHeight:260,width:"100%"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 160",children:[0!==i&&Object(r.jsx)("text",{x:15*(t.topNames.length-1)+15,y:16,style:{fontSize:"0.5rem",fill:"#eee"},children:i}),L.map((function(e){return Object(r.jsxs)("g",{children:[1===Y[e+i]&&0!==e&&Object(r.jsx)("circle",{cx:t.topNames.length/2*15+2,cy:27*e,r:4,style:{fill:"#ccc"}}),2===Y[e+i]&&0!==e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("circle",{cx:t.topNames.length/2*15+2-10,cy:27*e,r:4,style:{fill:"#ccc"}}),Object(r.jsx)("circle",{cx:t.topNames.length/2*15+2+10,cy:27*e,r:4,style:{fill:"#ccc"}})]})]},"".concat(e+i,":fretball"))})),t.topNames.map((function(e,n){return Object(r.jsxs)("g",{children:[Object(r.jsx)("text",{x:15*n+7.5,y:7,style:{fontSize:"0.5rem",fill:"#eee"},children:e}),Object(r.jsx)("line",{x1:15*n+9.5,x2:15*n+9.5,y1:12,y2:160,style:{strokeWidth:N[n],stroke:"#ddd"}})]},"".concat(e,":").concat(n,":label"))})),L.map((function(e){return Object(r.jsx)("line",{x1:8,x2:15*(t.topNames.length-1)+10,y1:12+27*e,y2:12+27*e,style:{strokeWidth:1,stroke:"#ddd"}},e+i)})),n.notes.map((function(e,n){return-1!==e?Object(r.jsx)("circle",{cx:15*n+9.5,cy:12+27*(e-i)+(e-i===0?0:-7),r:5,style:{fill:"darkblue",fillOpacity:.8}},n):null}))]})},P=["1st","2nd","3rd","4th","5th","6th","7th"],F=function(e){var n=e.chord,t=e.instrument;return Object(u.c)(I,{className:"chord-card",children:[Object(u.b)(T,{chord:n,instrument:t}),Object(u.c)(H,{children:[P[n.inversion]," Inversion"]})]})},k=function(e){var n=e.note,t=e.onChange;return Object(u.b)(v,{children:p.SCALE_NOTES.map((function(e,r){return Object(u.b)(C,{selected:n===r,onClick:function(){return null===t||void 0===t?void 0:t(r)},children:e},e)}))})},W=function(e){var n=e.onChange,t=e.index,r=void 0===t?null:t;return Object(u.b)(b.a,{children:function(e){var t=e.open;return Object(u.c)(u.a,{children:[Object(u.b)(y,{children:Object(u.b)("span",{children:r?p.CHORDS[r].name:"Chords"})}),Object(u.b)(b.b,{show:t,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(u.b)(E,{children:p.CHORDS.map((function(e,t){var i=e.name;return Object(u.b)(S,{selected:t===r,onClick:function(){return null===n||void 0===n?void 0:n(t)},children:i},t)}))})})]})}})},G=p.StringedInstrument.guitar;var z=function(){var e=o.a.useState({note:4,chord:0}),n=Object(h.a)(e,2),t=n[0],r=n[1],i=o.a.useState([]),a=Object(h.a)(i,2),c=a[0],s=a[1],f=o.a.useState(0),b=Object(h.a)(f,2),E=b[0],R=b[1];return o.a.useEffect((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var n,r,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/cache/","/guitar_Guitar Standard_").concat(p.CHORDS[t.chord].name,"_").concat(t.note,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:for(r=e.sent,i=r.chords,R(0),o=[];i.length>0;)o.push(i.splice(0,12));s(o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(u.c)(M,{children:[Object(u.b)(m,{children:Object(u.c)(A,{children:[Object(u.b)(D,{children:Object(u.b)(W,{index:t.chord,onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{chord:e}))}})}),Object(u.b)(k,{note:t.note,onChange:function(e){return r(Object(w.a)(Object(w.a)({},t),{},{note:e}))}})]})}),Object(u.b)(g,{children:((null===c||void 0===c?void 0:c[E])||[]).map((function(e,n){return Object(u.b)(F,{chord:e,instrument:G},n)}))}),Object(u.b)(x,{children:Object(u.b)(U,{children:c.map((function(e,n){return Object(u.b)(B,{selected:E===n,onClick:function(){return R(n)},children:n+1},n)}))})})]})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),K()},5:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||r(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),i(t(21),n),i(t(22),n),i(t(35),n)}},[[40,1,2]]]);
//# sourceMappingURL=main.17bfc918.chunk.js.map
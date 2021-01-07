let elems = [];
elems[0] = document.querySelector('#a');
elems[1] = document.querySelector('#b');
elems[2] = document.querySelector('#c');
elems[3] = document.querySelector('#d');
elems[4] = document.querySelector('#e');
elems[5] = document.querySelector('#f');
elems[6] = document.querySelector('#g');

if (elems[0].offsetWidth === 125 && elems[0].offsetHeight === 165) {
  elems[0].append(getImage());
  elems[0].pass = true;
}

if (elems[1].offsetWidth === 125 && elems[1].offsetHeight === 190) {
  elems[1].append(getImage());
  elems[1].pass = true;
}
console.log(elems[2].offsetLeft);
if (elems[2].offsetWidth === 375 && elems[2].offsetHeight === 355) {
  elems[2].append(getImage());
  elems[2].pass = true;
}

if (elems[3].offsetWidth === 125 && elems[3].offsetHeight === 150) {
  elems[3].append(getImage());
  elems[3].pass = true;
}

if (elems[4].offsetWidth === 333 && elems[4].offsetHeight === 150) {
  elems[4].append(getImage());
  elems[4].pass = true;
}

if (elems[5].offsetWidth === 41 && elems[5].offsetHeight === 75) {
  elems[5].append(getImage());
  elems[5].pass = true;
}

if (elems[6].offsetWidth === 41 && elems[6].offsetHeight === 75) {
  elems[6].append(getImage());
  elems[6].pass = true;
}

if (elems.every((x) => x.pass)) {
  elems.forEach((elem) => {
    elem.removeChild(document.querySelector('#pass'));
  });

  elems[4].style.fontSize = '4em';
  elems[4].append('You did it!');
  elems[2].append(
    getImage(
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/65/smiling-face-with-sunglasses_1f60e.png'
    )
  );
}

function getImage(optionalImage) {
  let img = document.createElement('img');
  if (optionalImage) {
    img.style.width = '100%';
  } else {
    img.style.maxWidth = '100%';
  }
  img.id = 'pass';
  img.src =
    optionalImage ||
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/65/thumbs-up-sign_emoji-modifier-fitzpatrick-type-3_1f44d-1f3fc_1f3fc.png';

  return img;
}

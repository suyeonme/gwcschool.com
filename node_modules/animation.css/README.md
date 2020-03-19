# animation.css
CSS animation function classes.

## setup

```
npm install animation.css
```

```css
@import 'node_modules/animation.css/main';
```

## classes

### [`animation-direction`](https://drafts.csswg.org/css-animations/#animation-direction)

- `.animation-reverse` animates in reverse
- `.animation-alternate` alternates direction

### [`animation-fill-mode`](https://drafts.csswg.org/css-animations/#animation-fill-mode)

- `.animation-seed` seeds first frame during animation delay
- `.animation-stay` stays in last frame after completion
- `.animation-fill` seeds and stays

### [`animation-play-state`](https://drafts.csswg.org/css-animations/#animation-play-state)
- `.animation-paused` pauses animation

### [`animation-name`](https://drafts.csswg.org/css-animations/#animation-name)
- `.animation-none` deactivates animation

### [`animation-iteration-count`](https://drafts.csswg.org/css-animations/#animation-iteration-count)
- `.animation-infinite` animates forever

## usage

```html
<figure class="animation-infinite animation-stay">
  Apply classes to control animation properties.
</figure>
```

import test from 'ava';
import kebabCase from './kebab-case';

test('kebab handles spaces', t => {
    var value = "the quick brown fox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});

test('kebab handles dashes', t => {
    var value = "the-quick-brown-fox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});

test('kebab handles underscores', t => {
    var value = "the_quick_brown_fox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});

test('kebab handles capitals', t => {
    var value = "theQuickBrownFox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});

test('kebab handles capital at start of word', t => {
    var value = "TheQuickBrownFox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});

test('kebab handles various multiple separators', t => {
    var value = "the - quick * brown# fox";
    var expected = "the-quick-brown-fox";

    t.is(kebabCase(value), expected);
});


test('kebab handles successive capitals', t => {
    var value = "theQUICKBrownFox";
    var expected = "the-q-u-i-c-k-brown-fox";

    t.is(kebabCase(value), expected);
});
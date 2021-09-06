function test(title, fn) {
  try {
    fn();
    console.log(title, '测试通过');
  } catch (e) {
    console.log(e);
    console.error(title, '测试不通过');
  }
}

function expect(ret) {
  return {
    toBe(arg) {
      if (ret !== arg) {
        throw Error('预期和实际不符');
      }
    },
  };
}

test('测试数字相加', () => {
  expect(add(1, 2)).toBe(3);
});

for (l = (a = process.argv.slice(2))[0]?.length || 0; ~l; l--)
  for (x = 0; x <= a[0]?.length - l; x++)
    if (a.every((e) => e.includes((t = a[0]?.slice(x, x + l)))))
      return console.log(t) || undefined;
console.log("");

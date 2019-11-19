## build

```bash
echo 'Building the site...'
npm run build
rm -Rf launch/js launch/css launch/imgs launch/site
mkdir launch/css launch/js
cp public/*.js launch/js
cp public/*.css launch/css
cp -Rf public/imgs launch/
cp -Rf public/site launch
cp public/CNAME launch
```

## dev

```bash
echo "Compiling dev env..."
npm run dev
```

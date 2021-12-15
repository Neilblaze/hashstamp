# Hashstamp 🕒

> **Create a hash of the current timestamp instantly ⚡**

* Leverages Secure *SHA512* hashes
* Useful for Crypto operations
* 100% Server/Client side operational

## Install

```console
$ npm install --save hashstamp
```


## Usage

```js
const hashstamp = require('hashstamp');

hashTheTimestamp(new Date('2021-12-15 16:00:00 UTC+00:00'));

// Format 👉 YYYY-MM-DD HH:MM:SS

// Output 👇

'7021f60cf3301389afa13ab5047a0db6dae6b123633d854305847b93a54afdf299c2d02cd89b3537b8e5e2db06606ce35390e8a70d470758722426307cd93434'
```


### API usage

- > hashstamp(timestamp) => Return value: The hash of the timestamp

- > timestamp | Type: `number`



## Contributing

Pull requests are always welcome! 🌟

## License

MIT © [Pratyay Banerjee](https://neilblaze.live)
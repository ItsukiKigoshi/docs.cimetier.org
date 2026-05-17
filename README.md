# Quartz v4

GitLab CI で差分だけ更新できないの？

Created with [Quartz v4](https://github.com/jackyzha0/quartz) ([Docs](https://quartz.jzhao.xyz/))

To update Quarts version:
(already added the [original repository](https://github.com/jackyzha0/quartz.git) to "upstream")
```sh
git fetch upstream
git merge upstream/v4
```

To run development server
```sh
npx quartz build --serve
```

To build th estatic site
```sh
npx quartz build
```

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

---
title: 多元宇宙天気予報
---
## multimeteoverse
- 毎日新たな気象予報モデルが生まれ，毎日それぞれのモデルが天気図予測する．  
- 過去に生まれたモデルはどんどん現実と離れていき，多元宇宙の様相.  
- 人間と機械学習の連携で, モデルは日々強化されたり, されなかったり.  
    - 私のお勉強と機械学習の進展が日々  
- 概要: models (日々生まれるモデルが入ったリスト), weather (日々の天気図が入ったリスト)  
    - 0日目, 1日目, 2日目, 3日目, \[...\]  
    - Weathers: weather\[0\], weather\[1\], weather\[2\], weather\[3\]  
    - Model 0: NaN, models\[0\](weather\[0\]), models\[0\](weather\[0\], weather\[1\]), models\[0\](weather\[0\], weather\[1\], weather\[2\])  
    - Model 1: NaN, NaN, models\[1\](weather\[1\]), models\[1\](weather\[1\], weather\[2\])  
    - Model 2: NaN, NaN, NaN, models\[2\](weather\[2\])  
    - 記録は0日目から増えていき，各モデルは生まれる前日以降のすべての記録にアクセスできるが，同じ日に生まれたモデルは変化しない.  
        - 全く別の経過を経て, 異なる宇宙で同じ日に同じような天気になることがあるかもしれない.  
    - n日目でモデルの数はn, すべてのモデルが生成した予想(多元宇宙の天気記録)の数は大体(n^2+n))/2くらいになる.  
        - 記録の増え方は多項式だけど, どれくらいでストレージを圧迫するようになる?  
## Deployment
- [gradio](https://www.gradio.app/)
- [Dash](https://dash.plotly.com/)
- [Streamlit](https://streamlit.io/)
## Workaround
### 20260422
- 天気図を作るのって意外と難しそう．そもそも天気図って気圧配置だから，天気をメッシュで表すような方法を定義する必要がありそう
- プロも使用する天気予報をする汎用ライブラリ/モデルはないの？プロプライエタリ？
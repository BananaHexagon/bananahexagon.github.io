
import { Header } from "../../../components/header";

export const Note = () => (
    <div id="note">
        <Header />
        <div id="main">
            <h1>プログラミング言語を作りたい</h1>
            <p>急にプログラミング言語を自作してみたくなること、ありますよね。僕は三回目です。</p>
            <p>三度目の正直ということで、ちゃんとした言語の制作に挑戦してみたいと思います。</p>
            <p>現段階だと本当に何も決まってないので、とりあえず今の欲望を適当にガンガン書き出してみようと思います。</p>
            <p>リポジトリは<a href="https://github.com/Bananahexagon/butter-lang">こ↑こ↓</a></p>
            <h2>欲望</h2>
            <p>こんな感じのを作りたい</p>
            <ul>
                <li>JSっぽい簡単な構文にしたい</li>
                <li>静的型付けであってほしい</li>
                <li>バイナリにコンパイルしたい</li>
                <li>ifとかswitchを式として扱いたい</li>
                <li>JS版のNimみたいなことをしたい</li>
                <li>GCは無しにしたい</li>
                <li>メモリ管理に命かけたくないし所有権とかもめんどくさい</li>
                <li>C/C++との連携をすごい簡単にしたい</li>
                <li>めちゃくちゃ多プラットフォーム対応したい</li>
            </ul>
            <p>以上！閉廷！</p>
        </div>
    </div>
);
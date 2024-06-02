import './App.css';
import logo from './image/cg-logo.png';
import awardImage from './image/300×250.png';
import device from './image/cloudgateuno-sso.png';
import signon from './image/single-signon.svg';
import access from './image/access-control.svg';
import mfa from './image/mfa.svg';
import cert from './image/certificate.svg';
import female from './image/female-thinking.png';

function App() {
  return (
    <div className="app-container">
      <section>
        <div className="hero">
          <div className="content">
            <img src={logo} alt="logo" />
            <h1>多様な働き方に合わせたクラウド認証も、<br /> 社内システムのログイン統合も、<br /> これひとつで。</h1>
            <p>
              ゼロトラストモデルを採用したCloudGate MUROは快適で <br /> よりセキュアなクラウド利用を可能にします。
            </p>
            <img className='award' src={awardImage} alt="Award" />
          </div>
          <img className='womanImage' src={female} alt="Female Thinking" />
          <div className="content-form">
            <div className="formDisplay">
              <h2>CloudGate MUROトライアル申込</h2>
              <p className='sub-head'>CloudGate UNO トライアル申込フォームにお客様の情報をご記 <br /> 入ください。</p>
              <form>
                <label htmlFor="companyName">会社名<p className='redText'>会社名</p></label>
                <input type="text" id="companyName" name="companyName" />
                
                <label htmlFor="companyUrl">会社 URL<p className='redText'>会社名</p></label>
                <input type="text" id="companyUrl" name="companyUrl" />

                <div className="dual">
                  <div className="dual-content">
                    <label htmlFor="firstName">氏<p className='redText'>会社名</p></label>
                    <input type="text" id="firstName" name="firstName" />
                  </div>
                  <div className="dual-content">
                    <label htmlFor="lastName">名<p className='redText'>会社名</p></label>
                    <input type="text" id="lastName" name="lastName" />
                  </div>
                </div>

                <label htmlFor="email">メールアドレス<p className='redText'>会社名</p></label>
                <input type="email" id="email" name="email" />

                <label htmlFor="service">CloudGateと連携されたいサービス<p className='blueText'>任意</p></label>
                <select />

                <label htmlFor="comment">コメント <p className='blueText'>任意</p> 500文字以内で入力してください</label>
                <textarea id="comment" name="comment"></textarea>

                <p className='endText'>私は、CloudGateトライアル利用規約同意書に同意します<span className='secondRedText'>会社名</span></p>
                <p className='endText'>「個人情報の取扱い」について同意します。</p>

                <div className="endLine">
                  <input className='checkBox' type="checkbox" />
                  <p>同意する</p>
                </div>
                
                <button type="submit">同意する</button>
                
              </form>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="headerText">
            <h1>CloudGate MUROで実現できること</h1>
          </div>
          <div className="middleContent">
            <img src={device} alt="Device" />
            <div className="cards-container">
              <div className="card">
                <div className="headerImage">
                  <img className='smallImage' src={signon} alt="Signon" />
                  <h3>ゼロトラストモデル<br /> シングルサインオン</h3>
                </div>
                <p>シングルサインオン (SSO) の利便性を <br />確保しつつ、ゼロトラストで安全性を両 <br />立しながら様々なクラウドサービスへの <br />アクセスができます。</p>
              </div>
              <div className="card">
                <div className="headerImage">
                  <img className='smallImage' src={access} alt="Access" />
                  <h3>柔軟なアクセス制限</h3>
                </div>
                <p>人・物・場所などを特定して各種 <br />クラウドへアクセスできる条件を指定<br />できます。</p>
              </div>
              <div className="card">
                <div className="headerImage">
                  <img className='smallImage' src={mfa} alt="MFA" />
                  <h3>強固な認証</h3>
                </div>
                <p>セキュリティキー、Windows Helloや <br />Touch IDを利用してパスワードのいらな <br />い認証ができます。</p>
              </div>
              <div className="card">
                <div className="headerImage">
                  <img className='smallImage' src={cert} alt="Cert" />
                  <h3>証明書による端末制限</h3>
                </div>
                <p>許可された端末のみへの証明書の配布及 <br />びインストールが可能な為、厳格な端末 <br />制限が実現できるようになります。</p>
              </div>
            </div>
          </div>
          <div className="endTextContainer">
            <div className="textContainer">
              <h2>ゼロトラストアーキテクチャの採用</h2>
              <p>CloudGate MUROは、お客様により安全にクラウドサービスをご利用いただくた<br />め、ゼロトラストモデルのシングルサインオン機能を採用。安全なサインオンを実現<br />するため、クラウドサービスへのアクセスを行う際、誰が（Who）、何を使って<br />（What）、いつ（When）、どこから（Where）、どのように（How）サインオン<br />するかということを特定してアクセス制限が可能です。</p>
            </div>
            <div className="textContainer">
              <h2>サービスごとにアクセス制限を実現</h2>
              <p>CloudGate MUROはお客様により安全にクラウドサービスをご利用いただくため、<br />ゼロトラストモデルのシングルサインオン機能を採用。クラウドサービスにアクセス<br />する度に確認（認証）をするアプローチに変わりました。<br /> これにより、ユーザーやグループ単位だけでなく、クラウドサービスごとにアクセス<br />制限を設定できるようになりました。</p>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-content">
              <p>© 1993 - 2022 International Systems Research Co., All Rights Reserved.</p>
              <ul>
                <li><a href="#">ISR利用規約</a></li>
                <li><a href="#">個人情報保護方針</a></li>
                <li><a href="#">プライバシー</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;

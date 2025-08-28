/**
 * メディアクエリ変数を管理して、`this.matches(query, layoutChangedCallback)`で`query`が一致するか判定します。
 * @example
 * import MediaQuery from './lib/MediaQuery';
 */
const MediaQuery = {
  /**
   * メディアクエリがロードで判定またはリサイズで判定が切り替わったときに、コールバックで真偽値を返します。
   * @link https://github.com/yuheiy/real-world-website-boilerplate/blob/master/src/js/mediaQuery.js
   * @param {(String | Number)} query - メディアクエリ文字列（`list`のキー）か数値
   * @param {boolean} layoutChangedCallback - メディアクエリが一致するかの真偽値
   * @example
   * MediaQuery.matches('md', matches => {
   *   console.log(matches ? 'md' : 'sm');
   * });
   * MediaQuery.matches(768, matches => {
   *   console.log(matches ? '768以上' : '767以下');
   * });
   */
  matches: (query, layoutChangedCallback = null) => {
    const BROWSER_DEFAULT_FONT_SIZE = 16;
    const list = {
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    };

    let mediaQuery = `(min-width: ${
      list[query] / BROWSER_DEFAULT_FONT_SIZE
    }em)`;

    if (typeof query === "number") {
      mediaQuery = `(min-width: ${query / BROWSER_DEFAULT_FONT_SIZE}em)`;
    }

    const mql = window.matchMedia(mediaQuery);

    if (layoutChangedCallback == null) {
      return false;
    }

    const listener = (event) => {
      if (layoutChangedCallback != null) {
        layoutChangedCallback(event.matches);
      }
    };
    mql.addEventListener("change", listener);

    if (layoutChangedCallback != null) {
      layoutChangedCallback(mql.matches);
    }
    const uninstall = () => {
      mql.removeEventListener("change", listener);
    };

    return uninstall;
  },
};

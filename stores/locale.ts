import { defineStore } from "pinia";

// 明确导出 Locale 类型以便其他地方使用
export type Locale = "zh-CN" | "zh-TW" | "en";

interface LanguageOption {
  code: Locale;
  text: string;
}

interface Messages {
  [key: string]: string;
}

export const useLocaleStore = defineStore("locale", {
  state: () => ({
    currentLocale: "zh-CN" as Locale,
    messages: {
      "zh-CN": {
        welcome: "欢迎",
        agreement: "用户协议",
        privacy: "隐私政策",
        help: "帮助中心",
        account: "小米账号",
        login: '登录',
        register: '注册',
        emailOrPhone: '邮箱/手机号码/小米ID',
        password: '密码',
        agreementText: '已阅读并同意小米账号使用协议和隐私政策',
        forgotPassword: '忘记密码？',
        phoneLogin: '手机号登录',
        otherLoginMethods: '其他方式登录',
        privacyPolicyConfirmation: '隐私政策确认',
        privacyPolicyText: '请阅读并同意我们的隐私政策和使用条款以继续登录。',
        cancel: '取消',
        agreeAndContinue: '同意并继续',
        countryRegion: '国家/地区',
        china: '中国',
        countryCode: '国家码',
        phoneNumber: '手机号',
        enterVerificationCode: '请输入验证码',
        getVerificationCode: '获取验证码',
        retryAfter: '后重试',
        noVerificationCode: '收不到验证码？',
        phoneRequired: '请输入手机号',
        copyright: '小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号',
      },
      "zh-TW": {
        welcome: "歡迎",
        agreement: "用戶協議",
        privacy: "隱私政策",
        help: "幫助中心",
        account: "小米賬號",
        login: '登入',
        register: '註冊',
        emailOrPhone: '郵箱/手機號碼/小米ID',
        password: '密碼',
        agreementText: '已閱讀並同意小米賬號使用協議和隱私政策',
        forgotPassword: '忘記密碼？',
        phoneLogin: '手機號登入',
        otherLoginMethods: '其他方式登入',
        privacyPolicyConfirmation: '隱私政策確認',
        privacyPolicyText: '請閱讀並同意我們的隱私政策和使用條款以繼續登入。',
        cancel: '取消',
        agreeAndContinue: '同意並繼續',
        china: '中國',
        countryCode: '國家碼',
        phoneNumber: '手機號碼',
        enterVerificationCode: '請輸入驗證碼',
        getVerificationCode: '獲取驗證碼',
        retryAfter: '後重試',
        noVerificationCode: '收不到驗證碼？',
        phoneRequired: '請輸入手機號',
        copyright: '小米公司版權所有-京ICP備10046444-京公網安備11010802020134號-京ICP證110507號',
      },
      en: {
        welcome: "Welcome",
        agreement: "User Agreement",
        privacy: "Privacy Policy",
        help: "Help Center",
        account: "Xiaomi Account",
        login: 'Login',
        register: 'Register',
        emailOrPhone: 'Email/Phone/Xiaomi ID',
        password: 'Password',
        agreementText: 'I have read and agree to the Xiaomi Account User Agreement and Privacy Policy',
        forgotPassword: 'Forgot password?',
        phoneLogin: 'Login with phone',
        otherLoginMethods: 'Other login methods',
        privacyPolicyConfirmation: 'Privacy Policy Confirmation',
        privacyPolicyText: 'Please read and agree to our Privacy Policy and Terms of Use to continue logging in.',
        cancel: 'Cancel',
        agreeAndContinue: 'Agree and Continue',
        countryRegion: 'Country/Region',
        china: 'China',
        countryCode: 'Country Code',
        phoneNumber: 'Phone Number',
        enterVerificationCode: 'Enter verification code',
        getVerificationCode: 'Get verification code',
        retryAfter: 'retry after',
        noVerificationCode: "Didn't receive code?",
        phoneRequired: 'Please enter your mobile phone number',
        copyright: '© Xiaomi Inc. All Rights Reserved - ICP No.10046444 - Beijing Public Security No.11010802020134 - Beijing ICP Certificate No.110507',
      },
    } as Record<Locale, Messages>,
  }),

  getters: {
    t:
      (state) =>
      (key: string): string => {
        return state.messages[state.currentLocale][key] || key;
      },

    currentLanguageText(): string {
      const map: Record<Locale, string> = {
        "zh-CN": "中文(简体)",
        "zh-TW": "中文(繁體)",
        en: "English",
      };
      return map[this.currentLocale];
    },

    availableLanguages(): LanguageOption[] {
      const allLanguages: LanguageOption[] = [
        { code: "zh-CN", text: "中文(简体)" },
        { code: "zh-TW", text: "中文(繁體)" },
        { code: "en", text: "English" },
      ];
      return allLanguages.filter((lang) => lang.code !== this.currentLocale);
    },
  },

  actions: {
    setLocale(locale: Locale) {
      this.currentLocale = locale;
      localStorage.setItem("userLocale", locale);
    },

    initLocale() {
      const savedLocale = localStorage.getItem("userLocale");
      if (savedLocale && Object.keys(this.messages).includes(savedLocale)) {
        this.currentLocale = savedLocale as Locale;
      }
    },
  },
});

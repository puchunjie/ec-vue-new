<template>
  <div class="user-layout-wrapper">
    <div class="container">
      <div class="top">
        <div class="header">
          <a href="/">
            <!-- <img src="~@/assets/logo.svg" class="logo" alt="logo" /> -->
            <span class="title">EC意施</span>
          </a>
        </div>
        <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
      </div>

      <div class="main">
        <a-form
          id="formLogin"
          class="user-layout-login"
          ref="formLogin"
          :form="form"
          @submit="handleSubmit"
        >
          <a-tabs
            activeKey="tab1"
            :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
          >
            <a-tab-pane key="tab1" tab="账号密码登录">
              <a-form-item>
                <a-input
                  size="large"
                  type="text"
                  placeholder="账号"
                  v-decorator="[
                    'username',
                    {
                      rules: [
                        { required: true, message: '请输入帐户名或邮箱地址' },
                      ],
                      validateTrigger: 'change',
                    },
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input-password
                  size="large"
                  placeholder="密码"
                  v-decorator="[
                    'password',
                    {
                      rules: [{ required: true, message: '请输入密码' }],
                      validateTrigger: 'blur',
                    },
                  ]"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    :style="{ color: 'rgba(0,0,0,.25)' }"
                  />
                </a-input-password>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>

          <a-form-item style="margin-top: 24px">
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              >确定</a-button
            >
          </a-form-item>
        </a-form>
      </div>

      <div class="footer">
        <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div>
        <div class="copyright">Copyright &copy; 2018 vueComponent</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import user from '@/apis/user'
console.log(user)
export default {
  components: {},
  data() {
    return {
      form: this.$form.createForm(this),
    };
  },
  created() {},
  methods: {
    ...mapActions([ 'setUser' ]),
    handleSubmit(e) {
      e.preventDefault();
      const validateFieldsKey = ['username', 'password']
      this.form.validateFields(validateFieldsKey, { force: true }, async (err, values) => {
        console.log('err', err)
        if (!err) {
          console.log('login form', values)
          const params = {
            user_name: values.username,
            password: values.password,
          }
          const res = await user.login(params);
          console.log(res)
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>

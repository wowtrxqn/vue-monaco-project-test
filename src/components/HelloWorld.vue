<template>
  <div class="hello">
    <div>
      <label v-for="(item, index) in allLanguages" :key="index">
        <input type="radio" v-model="language" :value="item" @change="getRadioVal" />
        {{ item }}
      </label>
    </div>
    <MonacoEditor ref="editor" class="editor" :value="value" :language="language" theme="vs-dark" />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    MonacoEditor
  },
  data() {
    return {
      value:
        "logging:\n  level:\n    tk.mybatis: DEBUG\n    com.xpboot.admin: DEBUG\nspring:\n  application:\n    name: xp-admin\n  jackson:\n    date-format: yyyy-MM-dd HH:mm:ss\n    time-zone: GMT+8\n    default-property-inclusion: non_null\n\n  datasource:\n    name: test\n    url: jdbc:mysql://${MYSQL_HOST:localhost}:${MYSQL_PORT:3306}/xp_pro_admin?useUnicode=true&characterEncoding=UTF8\n    username: root\n    password: xpboot@123456\n    # 使用druid数据源\n    type: com.alibaba.druid.pool.DruidDataSource\n    driver-class-name: com.mysql.jdbc.Driver\n    druid:\n      filters: stat\n      maxActive: 20\n      initialSize: 1\n      maxWait: 60000\n      minIdle: 1\n      timeBetweenEvictionRunsMillis: 60000\n      minEvictableIdleTimeMillis: 300000\n      validationQuery: select 'x'\n      testWhileIdle: true\n      testOnBorrow: false\n      testOnReturn: false\n      poolPreparedStatements: true\n      maxOpenPreparedStatements: 20\n  redis:\n    database: 1\n    host: ${REDIS_HOST:127.0.0.1}\n    port: ${REDIS_PORT:6379}\n    password: Veadan88926\n    pool:\n    jedis:\n      pool:\n        max-idle: 20\n\nmybatis:\n  mapper-locations: \"classpath*:mapper/*.xml\"\n\nserver:\n  port: 8772\n\nfeign:\n  sentinel:\n    enabled: true\n  httpclient:\n    enabled: false\n  okhttp:\n    enabled: true\n\nribbon:\n  nacos:\n    enabled: true\n  ReadTimeout: 120000\n  ConnectTimeout: 120000\n  MaxAutoRetries: 0\n  MaxAutoRetriesNextServer: 1\n  OkToRetryOnAllOperations: false\n\n#hystrix:\n#  threadpool:\n#    default:\n#      coreSize: 1000 ##并发执行的最大线程数，默认10\n#      maxQueueSize: 1000 ##BlockingQueue的最大队列数\n#      queueSizeRejectionThreshold: 500 ##即使maxQueueSize没有达到，达到queueSizeRejectionThreshold该值后，请求也会被拒绝\n#  command:\n#    default:\n#      execution:\n#        isolation:\n#          thread:\n#            timeoutInMilliseconds: 110000\n\n# 配置swagger\nswagger:\n  gate-host: http://${SWAGGER_HOST:127.0.0.1}:8765\n  enabled: true\n  base-package: com.xpboot.admin\n  title: xp-admin\n  authorization:\n    key-name: Authorization\n  version: 1.0-SNAPSHOT\n  description: XPBOOT后端管理服务\n  contact:\n    name: Veadan\n\nauth:\n  serviceId: xp-auth\n  user:\n    token-header: Authorization\n    limit-expire: 1440 # 一天过期\n  client:\n    id: xp-admin\n    secret: 123456\n    token-header: client-token\n\n#redis-cache 相关\nredis:\n  pool:\n    maxActive: 300\n    maxIdle: 100\n    maxWait: 1000\n  host: ${REDIS_HOST:localhost}\n  port:  ${REDIS_PORT:6379}\n  password:\n  timeout: 2000\n  # 服务或应用名\n  sysName: xp-admin\n  enable: true\n  database: 0\n# 跨服务数据合并\nmerge:\n  enabled: true\n  guavaCacheNumMaxSize: 1000\n  guavaCacheRefreshWriteTime: 10 # min\n  guavaCacheRefreshThreadPoolSize: 10\n  aop:\n    enabled: true\n\nmapper:\n  mappers: com.xpboot.common.mapper.CommonMapper\n\nmsm:\n  appId: 1400304154\n  appKey: 200309a3a4bdcee47c4265afc8b83b8b\n  registTempId: 519605\n  resetTempId: 519606\n  loginTempId: 519604\n  sign: XPBOOT\n",
      allLanguages: [
        "json",
        "text",
        "html",
        "yaml",
        "xml",
        "properties",
        "javascript"
      ],
      language: "yaml"
    };
  },
  methods: {
    getRadioVal(e) {
      this.language = e.target.value;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editor {
  height: 300px;
  border: 1px solid grey;
  text-align: left;
}
</style>

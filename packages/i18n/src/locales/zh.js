const translation = {
  loading: '加载中',
  loggingIn: '登陆中...',
  refresh: '刷新',
  delete: '删除',
  deleting: '删除中...',
  open: '打开',
  remove: '移除',
  rename: '重命名',
  renaming: '重命名中',
  duplicate: '复制',
  create: '创建',
  creating: '创建中',
  save: '保存',
  saving: '保存中',
  import: '引入',
  importing: '引入中',
  changing: '切换中...',
  delClickAgain: '再次点击删除',
  rmClickAgain: '再次点击移除',
  welcome: {
    welcome: '欢迎使用 {{projectName}}',
    message: '{{projectName}} 是一个在 {{chainName}} 链上的集成开发环境，提供图形界面帮助开发者进行开发。请安装以下依赖工具来使用 {{projectName}}。',
    start: '开始使用',
    skip: '跳过'
  },
  contract: {
    deploy: {
      title: '部署合约',
      deploy: '部署',
      fail: '部署失败',
      failText: '没有连接的网络，请启动本地网络或切换到远程网络。',
      connot: '无法部署',
      cannotTextFolder: '无法找到构建的文件夹，请确认你已经成功建立了该项目。',
      connotTextProject: '没有发现已构建的合约，请确认你已经成功建立了该项目。',
      error: '部署错误',
      errorText: '没有指定签名人，请选择一个签名人后签署部署交易。',
      success: '部署成功',
      parameters: '构造函数参数',
      signer: '签名账户',
      compiled: '已编译合约',
      maxFee: '最高收费',
      tip: '费用',
      gasLimit: 'Gas上限',
      deploying: '部署中...',
      deployingText: '部署合约<b>{{name}}</b>...',
      pushTrans: '推送交易',
      pushTransText: '交易哈希<b>{{txHash}}</b>...',
      timeout: '交易超时',
      failed: '交易失败',
      executed: '交易已执行',
      executedText: 'Gas被消耗{{gasUsed}}',
      confirmed: '交易已确认',
      aContract: '合约部署信息',
    },
    estimate: {
      fail: '估算失败',
      deploy: '估算与部署',
      re: '重新估算',
      basic: '基本信息',
      receipt: '交易收据',
      error: '错误',
    },
    build: {
      build: '构建',
      stopBuild: '停止构建',
      start: '构建项目',
      building: '构建中',
      fail: '构建失败',
      success: '构建项目成功',
      successTextSmart: '构建智能合约',
      downloadingSolcBin: '下载Solc Bin软件',
      failText: '现在正在运行另一个构建任务',
      fileCodeErr: '代码中存在错误',
      noMainFile: '没有主文件',
      noMainFileText: '请在项目设置中指定主文件',
      noVersion: '没有{{compilerName}}版本',
      noVersionText: '请在项目设置中为{{compilerName}}选择一个版本',
      notInstalled: '{{compilerName}} {{compilerVersion}} 未安装',
      notInstalledText: '请在{{compilerName}}管理器中安装该版本，或在项目设置中选择其他版本',
      solcNotInstall: 'Solc {{compilerSolc}} 未安装',
      solcNotInstallText: '请在Solc Manager中安装该版本或在项目设置中选择其他版本',
      contractFile: '构建合同文件',
      projectSuccess: '构建项目成功',
      fileSuccess: '构建文件成功',
      fileSuccessText: '请在<b>{{buildFolder}}</b>文件夹中找到生成的ABI和字节码',
      notFound: '未找到已构建的合同',
      notFoundText: '无法打开该文件<b>{{path}}</b>，请确保<i>智能合约部署</i>在项目设置中指向一个有效的内置合约',
      fileErr: '构建的合约文件错误',
      parametersErr: '构造函数参数中出现错误',
    },
    transaction: {
      execute: '执行',
      getEventLogs: '获取事件日志',
      hash: '哈希值',
      status: '状态',
      contract: '合约',
      function: '功能',
      contractName: '合约名称',
      authorization: '授权',
      parametersEmpty: '发送的交易参数为空',
      parametersEmptyText: '再按一次执行按钮来确认',
      executeFail: '执行合同失败',
      executeFailText: '发送的{{symbol}}是无效的',
      noSignerText: '没有提供签名者，请确保你有可用的密钥对，以便在密钥对管理器中使用。',
      range: '范围',
      clear: '清除',
      eventLogs: '事件日志',
    }
  },
  keypair: {
    manager: '密钥管理器',
    keypair: '密钥对',
    create: '创建',
    creating: '创建中',
    save: '保存',
    saving: '保存中',
    import: '导入',
    importing: '导入中',
    modify: '修改密钥对名称',
    donot: '请不要',
    warn: '在主网上使用! 仅用于开发目的。',
    description: '为了方便开发，私钥是不加密保存的。',
    regenerate: '重新生成',
    fromPrivateKey: '从私钥中重新生成',
    fromMnemonic: '从助记词中重新生成',
    info: '密钥对信息',
    createPlaceholder: '请输入密钥名称',
    inportLabel: '私钥',
    used: '该密钥对可用于',
    fail: '创建密钥对失败',
    failText: '密钥对名称<b>{{name}}</b>已经被使用',
    failImport: '引入密钥对失败',
    failImportText: '密钥对<b>{{address}}</b>已经存在',
    createSuccess: '创建{{text}}成功',
    createSuccessText: '一个新的{{text}}被创建并保存在{{projectName}}',
    importedSuccess: '引入{{text}}成功',
    importedSuccessText: '{{text}}被导入到{{projectName}}',
    deleteSuccess: '移除{{text}}成功',
    deleteSuccessText: '{{text}}从{{projectName}}被移除',
  },
  project: {
    projectSetting: '项目设置',
    general: '常规',
    compilers: '编译器',
    editor: '编辑',
    fontFamily: '字体',
    fontSize: '字号',
    fontLigatures: '字体连接符',
    version: '版本',
    title: '创建一个新的项目',
    textConfirm: '创建项目',
    name: '项目名称',
    template: '模板',
    location: '项目所在位置',
    choose: '选择',
    change: '更改',
    setting: '设置',
    workspace: '工作区',
    client: '客户端',
    success: '成功',
    successText: '新项目<b>{{name}}</b>被创建',
    cannotCreate: '无法创建该项目',
    cannotCreateTextOne: '请选择一个{{name}}版本',
    cannotCreateTextTwo: '请确保你安装了node.js',
    fail: '安装OpenZeppelin失败',
    newFile: '新建文件',
    newFolder: '新建文件夹',
    openContainingFolder: '打开文件所在位置',
    openInTerminal: '在终端打开',
    copyPath: '复制路径',
    cannotCreateFile: '无法创建该文件',
    cannotCreateFolder: '无法创建该文件夹',
    renameFile: '重命名文件',
    renameFolder: '重命名文件夹',
    cannotRenameFile: '无法重命名该文件',
    deleteFile: '删除文件',
    deleteFileText: '您确定要删除 {{fileName}} 吗？一旦删除，就不能再恢复。',
    deleteFolder: '删除文件夹',
    deleteFolderText: '您确定要删除 {{fileName}} 和它的内容吗？ 一旦删除，它们就不能再恢复。',
    existedFile: '存在的文件',
    existedFileText: '目标文件夹中已经存在一个名称为 {{fileName}} 的文件，你想替换它吗？',
    existedFolder: '存在的文件夹',
    existedFolderText: '目标文件夹中已经存在一个名称为 {{fileName}} 的文件夹，你想替换它吗？',
    donotAskAgain: '无需再次询问',
    features: {
      private: '私有',
      public: '公开',
      Toggling: '切换',
      Public: '公开',
      Private: '私有',
      privateText: ' 私人项目只对你自己可见。',
      publicText: ' 公共项目对任何拥有该链接的人都是可见的。',
      remind: '你在这个项目中有未保存的文件，请在改变项目的可见性之前保存。',
      visibility: '改变项目的属性',
      notSaved: '部分文件没有被保存',
      title: '你确定要把这个项目改成',
      changeSuccess: '改变性质成功',
      nowFeatures: '这个项目现在是',
      publicDescription: '并对任何拥有该链接的人可见。',
      privateDescription: '并且只对自己可见。',
      fail: '文件不存在',
      failText: '<b>{{openningPath}}</b>处没有文件。',
    },
    del: {
      title: '删除项目',
      delText: '您的操作将永久删除此项目，此操作不能被撤销！',
      type: '输入',
      toConf: '来确认',
      tips: '项目名称不匹配',
      others: '其他',
      rmSuccess: '移除项目成功',
      rmSuccessText: '项目<b>{{name}}</b>已经被移除',
      delSuccess: '删除项目成功',
      delSuccessText: '你已经永久地删除了项目<b>{{name}}</b>',
    },
    share: {
      share: '分享',
      shareLink: '分享链接',
      project: '分享项目',
      descStart: '你可以',
      descCopy: '复制',
      descShare: '分享',
      descText: '这个项目的链接并',
      descEnd: '给任何人',
      copyLink: '复制链接',
      copy: '复制',
      copied: '已复制',
      copyFailure: '复制失败',
      copyFailureText: '请重新点击',
    }
  },
  del: {
    title: '删除项目',
    delText: '您的操作将永久删除此项目，此操作',
    canont: '不能',
    delTextEnd: '被撤销！',
    desktopDelText: '你即将删除这个项目，原始文件仍将保留在你的驱动器中。',
    type: '输入',
    toConf: '来确认',
    tips: '项目名称不匹配',
    others: '其他',
    rmSuccess: '移除项目成功',
    rmSuccessText: '项目<b>{{name}}</b>已经被移除',
    delSuccess: '删除项目成功',
    delSuccessText: '你已经永久地删除了项目<b>{{name}}</b>',
  },
  component: {
    text: {
      confirm: '确认',
      cancel: '取消',
      close: '关闭',
    }
  }
}

export default {
  translation
}

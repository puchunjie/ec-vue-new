// 用户个人信息
const userMode = {
    permissionHref: '',
    urls: {
        verifylogin: "/api/v1/admin/verifylogin", //登录接口
        permissionlist: "/api/v1/admin/menu/permissionlist", //获取权限菜单列表
        createmenu: "/api/v1/admin/menu/create", //菜单创建
    }
}
//门店
const shopMode = {
    permissionHref: '',
    urls: {
        placelist: "/api/v1/admin/place/list", //场地-列表
        placecreate: "/api/v1/admin/place/create", //场地新建
        placeEdit: "/api/v1/admin/place/edit", //编辑场地-显示
        placeUpdate: "/api/v1/admin/place/update", //场地-更新保存
        placeDel: "/api/v1/admin/place/del", //场地-单个删除
        shopList: "/api/v1/admin/shop/list", //门店-列表
    }
}
// 课程
const classesMode = {
    permissionHref: '',
    urls: {
        coursetemp: "/api/v1/course/coursetemp", //课程管理列表
        templateinfo: "/api/v1/course/templateinfo", //课程详情
        createtemplate: "/api/v1/course/createtemplate", //新建课程
        createinfo: "/api/v1/course/createinfo", //新建页面信息
        coursearrangeList: "/api/v1/admin/course-arrange/list", //团课排期，列表模式里面列表
    }
}

// 员工 角色
const roleMode = {
    permissionHref: '',
    urls: {
        role: "/api/v1/admin/role", //角色列表
    }
}

//会员F
const memberMode = {
    permissionHref: '',
    urls: {
        
    }
}

export const user = userMode.urls
export const shop = shopMode.urls
export const classes = classesMode.urls
export const role = roleMode.urls
export const member = memberMode.urls



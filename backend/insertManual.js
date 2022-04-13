const userService = require('./service/userService.js')



const user1 = {
    nm_pic: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Elena Marques',
    nm_role: 'Dev Sênior',
    nm_skills: 'ReactJs,Rust,NodeJs',
    nm_email: 'elena_marques@fcamara.com.br',
    cd_password: 'elena_marques',
    nm_description: 'Uma Dev Sênior'
}

userService.create(user1).then((result) => console.log(result))

const user2 = {
    nm_pic: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Lucas Doyle',
    nm_role: 'Tech Leader',
    nm_skills: 'Java,Laravel,NodeJs',
    nm_email: 'lucas_doyle@fcamara.com.br',
    cd_password: 'lucas_doyle',
    nm_description: 'Um Tech Leader'
}
userService.create(user2).then((result) => console.log(result))

const user3 = {
    nm_pic: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Marcos Souza',
    nm_role: 'Dev Pleno',
    nm_skills: 'Angula,Swift,Django,ReactJs,VueJs',
    nm_email: 'marcos_souza@fcamara.com.br',
    cd_password: 'marcos_souza',
    nm_description: 'Um Dev Pleno'
}
userService.create(user3).then((result) => console.log(result))

const user4 = {
    nm_pic: 'https://images.unsplash.com/photo-1528426001684-1f1113c444c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Anna Caprine',
    nm_role: 'Dev Junior',
    nm_skills: 'Angular,NodeJs,MySQL',
    nm_email: 'anna_caprine@fcamara.com.br',
    cd_password: 'anna_caprine',
    nm_description: 'Uma Dev Junior'
}
userService.create(user4).then((result) => console.log(result))

const user5 = {
    nm_pic: 'https://images.unsplash.com/photo-1534644586429-7681a71bc591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'James Costa',
    nm_role: 'Dev Sênior',
    nm_skills: 'RubyOnRails,Rust,NodeJs,ReactJs,Laravel,Angular,MySQL,VueJs,Django,AWS',
    nm_email: 'james_costa@fcamara.com.br',
    cd_password: 'james_costa',
    nm_description: 'Um Dev Sênior'
}
userService.create(user5).then((result) => console.log(result))

const user6 = {
    nm_pic: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Julia Sophia',
    nm_role: 'DevOps',
    nm_skills: 'AWS,MySQL,Azure',
    nm_email: 'julia_sophia@fcamara.com.br',
    cd_password: 'julia_sophia',
    nm_description: 'Uma DevOps'
}
userService.create(user6).then((result) => console.log(result))

const user7 = {
    nm_pic: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Caique Brito',
    nm_role: 'Dev Junior',
    nm_skills: 'NodeJs,Rust,AWS',
    nm_email: 'caique_brito@fcamara.com.br',
    cd_password: 'caique_brito',
    nm_description: 'Um Dev Junior'
}
userService.create(user7).then((result) => console.log(result))

const user8 = {
    nm_pic: 'https://images.unsplash.com/photo-1582556362337-6a785ee99c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80',
    nm_name: 'Felipe Braga',
    nm_role: 'Dev Sênior',
    nm_skills: 'ReactJs,Laravel,VueJs',
    nm_email: 'Felipe_braga@fcamara.com.br',
    cd_password: 'Felipe_braga',
    nm_description: 'Um Dev Sênior'
}
userService.create(user8).then((result) => console.log(result))
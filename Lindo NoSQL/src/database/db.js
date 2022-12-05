db = new Mongo().getDB("cdgv");

db.createCollection('users', { capped: false });

db.users.insert([
    { username: "admin", password: "MSEC{M0N0_U_0@_M!nh_Chj_L@_M0t_N9u01_D3n_S@u}"},
    { username: "loicon", password: "f28520e0f03cff422ee45d69904d79cc" },
    { username: "quanglinh", password: "e5c43d2718f2a1e7b6bf9839bd274ec5" },
    { username: "thuytien", password: "d3920c990edb0ebc7da441426b882732" }
]);
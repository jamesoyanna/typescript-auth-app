const { Router } = require("express");

const isAuth = require("../middleware/is-admin");
const adminController = require("../controllers/admin");

const router = Router({ strict: true });

router.post("/login", adminController.login);
router.get("/auth-admin", isAuth, adminController.getAuthAdmin);
router.get("/users", isAuth, adminController.getUsers);
router
  .route("/users/:id")
  .patch(isAuth, adminController.updateUser)
  .delete(isAuth, adminController.deleteUser);

module.exports = router;
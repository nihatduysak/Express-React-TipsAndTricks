const express = require("express");
const { getAllArticles, newArticle, getSingleArticle, editArticle, deleteArticle, likeArticle, undoLikeArticle } = require("../controllers/article");
const { getAccessToRoute, getArticleOwnerAccess } = require("../middlewares/authorization/auth");
const { checkArticleExist } = require("../middlewares/database/databaseErrorHelpers");
const router = express.Router();

router.get("/", getAllArticles)
router.post("/new", getAccessToRoute, newArticle);
router.get("/:id", checkArticleExist, getSingleArticle);
router.put("/:id/edit", [getAccessToRoute, checkArticleExist, getArticleOwnerAccess], editArticle);
router.delete("/:id/delete", [getAccessToRoute, checkArticleExist, getArticleOwnerAccess], deleteArticle);
router.get("/:id/like", [getAccessToRoute, checkArticleExist], likeArticle);
router.get("/:id/undo-like", [getAccessToRoute, checkArticleExist], undoLikeArticle);
module.exports = router;
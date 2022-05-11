const { Post, User } = require("../lib/sequelize");
const fileUploader = require("../lib/uploader");
const {
  sessionAuthorizeLoggedInUser,
} = require("../middlewares/authmiddleware");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const { _limit = 30, _page = 1 } = req.query;

    delete req.query._limit;
    delete req.query._page;

    const findPosts = await Post.findAndCountAll({
      where: {
        ...req.query,
      },
      limit: _limit ? parseInt(_limit) : undefined,
      offset: (_page - 1) * _limit,

      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    return res.status(200).json({
      message: "Find posts",
      result: findPosts,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});
router.post(
  "/",
  fileUploader({
    destinatioFolder: "posts",
    fileType: "image",
    prefix: "POST",
  }).single("post_image_file"),
  async (req, res) => {
    try {
      const { caption, user_id } = req.body;

      const uploadFileDomain = process.env.UPLOAD_FILE_DOMAIN;
      const filePath = "post_images";
      const { filename } = req.file;

      const newPost = await Post.create({
        image_url: `${uploadFileDomain}/${filePath}/${filename}`,
        caption,
        user_id,
      });

      return res.status(500).json({
        message: "Post created",
        result: newPost,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
  }
);
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatePost = await Post.update(
      {
        ...req.body,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(500).json({
      message: "Post updated",
      result: updatePost,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletePost = await Post.destroy({
      where: {
        id,
      },
    });

    return res.status(500).json({
      message: "Post deleted",
      result: deletePost,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;

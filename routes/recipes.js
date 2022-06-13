var express = require("express");
var router = express.Router();
const recipes_utils = require("./utils/recipes_utils");

router.get("/", (req, res) => res.send("im here"));


/**
 * This path returns a full details of a recipe by its id
 */
router.get("/:recipeId", async (req, res, next) => {
  try {
    const recipe = await recipes_utils.getRecipeDetails(req.params.recipeId);
    res.send(recipe);
  } catch (error) {
    next(error);
  }
});



//-----------------------Custom Code-----------------------------
router.post("/recipePreview", async (req, res, next) => {
  let recipe_id=req.body.recipeId;
  let username=req.body.username
  try {
    const recipe = await recipes_utils.getRecipeDetails2(recipe_id,username);
    res.send(recipe);
} catch (error) {
    next(error);
} 
});


router.post("/random", async (req,res,next)=>{
  let x=3;
  let y=3;
  try {
    const recipe = await recipes_utils.getRecipeDetails2(recipe_id,username);
    res.send(recipe);
} catch (error) {
    next(error);
} 
});

module.exports = router;

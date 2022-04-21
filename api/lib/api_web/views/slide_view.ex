defmodule ApiWeb.SlideView do
  use ApiWeb, :view
  alias ApiWeb.SlideView

  def render("index.json", %{slides: slides}) do
    %{data: render_many(slides, SlideView, "slide.json")}
  end

  def render("show.json", %{slide: slide}) do
    %{data: render_one(slide, SlideView, "slide.json")}
  end

  def render("slide.json", %{slide: slide}) do
    %{
      id: slide.id,
      description: slide.description,
      order: slide.order,
      video: slide.video,
      question: slide.question,
      answer1: slide.answer1,
      answer2: slide.answer2,
      answer3: slide.answer3,
      answer4: slide.answer4,
      correct_ans: slide.correct_ans
    }
  end
end

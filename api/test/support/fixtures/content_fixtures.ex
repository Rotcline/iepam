defmodule Api.ContentFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Content` context.
  """

  @doc """
  Generate a slide.
  """
  def slide_fixture(attrs \\ %{}) do
    {:ok, slide} =
      attrs
      |> Enum.into(%{
        answer1: "some answer1",
        answer2: "some answer2",
        answer3: "some answer3",
        answer4: "some answer4",
        correct_ans: 42,
        description: "some description",
        order: "some order",
        question: true,
        video: true
      })
      |> Api.Content.create_slide()

    slide
  end
end

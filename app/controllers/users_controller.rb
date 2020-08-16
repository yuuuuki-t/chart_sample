class UsersController < ApplicationController

  def index
    gon.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    gon.scores = [1, 2, 3, 4, 5, 6]
  end

end
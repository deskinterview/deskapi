require 'rails_helper'

describe LabelsController do
  describe "GET /labels" do
    it "returns all the labels" do

      get "index", {}, { "Accept" => "application/json" }

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
    end
  end
end

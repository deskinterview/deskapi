require 'rails_helper'

describe FiltersController do
  describe "GET /filters" do
    it "returns all filters" do

      get "index", {}, { "Accept" => "application/json" } # 3 is a known case

      expect(response.status).to eq 200


      body = JSON.parse(response.body)
      expect(body["total_entries"]).to eq 10
    end
  end

  describe "GET /filters/:id" do
    it "returns the specified filter" do

      get "index", {:id => 2279510}, { "Accept" => "application/json" } # 3 is a known case

      expect(response.status).to eq 200
    end
  end
end

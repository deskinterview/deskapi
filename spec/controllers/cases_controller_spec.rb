require 'rails_helper'

describe CasesController do
  describe "GET /cases" do
    it "returns the specified case" do

      get "index", {:id => 3}, { "Accept" => "application/json" } # 3 is a known case

      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      expect(body["id"]).to eq 3
    end
  end
end

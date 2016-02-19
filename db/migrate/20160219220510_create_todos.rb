class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :user_id,       null: false
      t.string  :title,         null: false
      t.integer :pom_estimate,  null: false
      t.integer :pom_total,     null: false, default: 0
      t.boolean :completed,     null: false, default: false
    end

    add_foreign_key :todos, :users, column: :user_id
    add_index :users, :username
    add_index :todos, :user_id
  end
end
